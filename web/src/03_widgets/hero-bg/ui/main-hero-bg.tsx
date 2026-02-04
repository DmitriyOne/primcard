import { HeroBackgroundBlur, HeroBackgroundRoot, HeroGradientLayer, HeroShadeOverlay } from "@/src/04_features/hero-background/ui"

export const MainHeroBg = () => {
  return (
    <HeroBackgroundRoot>
      <HeroBackgroundBlur />
      <HeroGradientLayer />
      <HeroShadeOverlay />
    </HeroBackgroundRoot>
  )
}
