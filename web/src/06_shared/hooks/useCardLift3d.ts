import { useEffect, useRef, useState } from "react"
import { isServer } from "@/src/06_shared/utils"

const SCROLL_OFFSET = 40 // First 40px of scroll - do nothing
const START_ANGLE = 55 // Card lies back (tilted in)
const END_ANGLE = 0 // Card stands straight
const SCROLL_RANGE = 240 // Scroll range for full lift (reduced for earlier standing)

export const useCardLift3d = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(START_ANGLE)
  const [gradientOpacity, setGradientOpacity] = useState(1)
  const targetRotateXRef = useRef(START_ANGLE)
  const targetOpacityRef = useRef(1)

  useEffect(() => {
    if (isServer() || !ref.current) return

    const calculateTargetValues = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      if (scrollTop < SCROLL_OFFSET) {
        targetRotateXRef.current = START_ANGLE
        targetOpacityRef.current = 1
        return
      }

      const progress = Math.min(1, (scrollTop - SCROLL_OFFSET) / SCROLL_RANGE)
      const easedProgress = progress * progress * (3 - 2 * progress)
      
      targetRotateXRef.current = START_ANGLE + (END_ANGLE - START_ANGLE) * easedProgress
      targetOpacityRef.current = 1 - easedProgress
    }

    const animate = () => {
      setRotateX(prev => prev + (targetRotateXRef.current - prev) * 0.1)
      setGradientOpacity(prev => prev + (targetOpacityRef.current - prev) * 0.1)
      
      requestAnimationFrame(animate)
    }

    const handleScroll = () => {
      calculateTargetValues()
    }

    calculateTargetValues()
    const animationId = requestAnimationFrame(animate)

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return { ref, rotateX, gradientOpacity }
}
