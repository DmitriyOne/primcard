import { useEffect, useRef, useState } from "react"

import { isServer } from "@/src/06_shared/utils"

const SCROLL_OFFSET = 20 // First 20px of scroll - do nothing
const MIN_VISIBILITY = 0.25 // At least 25% of card must be visible
const START_ANGLE = 45 // Card lies back (tilted in)
const END_ANGLE = 0 // Card stands straight
const SCROLL_RANGE = 200 // Scroll range for full lift (smaller for faster lift)
const CENTER_ZONE = 100 // Zone around screen center for smooth alignment

export const useCardLift3d = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(START_ANGLE)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (isServer() || !ref.current) return

    const element = ref.current

    const calculateRotation = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      // Calculate card visibility
      const visibleTop = Math.max(0, -rect.top)
      const visibleBottom = Math.min(elementHeight, windowHeight - rect.top)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      const visibilityRatio = visibleHeight / elementHeight

      // Calculate card center position relative to screen center
      const cardCenter = rect.top + elementHeight / 2
      const screenCenter = windowHeight / 2
      const centerOffset = cardCenter - screenCenter

      let angle: number

      // If scroll is less than offset - do nothing
      if (scrollTop < SCROLL_OFFSET) {
        angle = START_ANGLE
      }
      // If card is less than 25% visible - wait
      else if (visibilityRatio < MIN_VISIBILITY) {
        angle = START_ANGLE
      }
      // Card is >= 25% visible and scroll >= offset - lift it
      else {
        // Basic progress based on scroll
        const scrollProgress = (scrollTop - SCROLL_OFFSET) / SCROLL_RANGE
        const clampedScrollProgress = Math.max(0, Math.min(1, scrollProgress))
        
        // Extra correction based on card center position
        // When card center is in screen center zone - smoothly align to 0
        let centerCorrection = 0
        if (Math.abs(centerOffset) < CENTER_ZONE) {
          // Smooth interpolation: closer to center, more correction to 0
          const centerRatio = 1 - Math.abs(centerOffset) / CENTER_ZONE
          centerCorrection = centerRatio * centerRatio // Quadratic for smoothness
        }
        
        // Combine: scroll lifts, center aligns
        const baseProgress = clampedScrollProgress
        const finalProgress = Math.min(1, baseProgress + centerCorrection * (1 - baseProgress))
        
        // Use easing function for smoother lift
        const easedProgress = finalProgress * finalProgress * (3 - 2 * finalProgress) // smoothstep
        angle = START_ANGLE + (END_ANGLE - START_ANGLE) * easedProgress
      }

      setRotateX(angle)
    }

    // Function to update using requestAnimationFrame
    const updateRotation = () => {
      calculateRotation()
      rafIdRef.current = null
    }

    const handleScroll = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(updateRotation)
      }
    }

    // Calculate initial value
    calculateRotation()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })
    window.addEventListener("resize", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return {
    ref,
    rotateX,
  }
}
