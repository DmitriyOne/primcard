import {
  HeroBackgroundRoot,
  HeroGradientLayer,
  HeroShadeOverlay,
  HeroStripes,
} from "@/src/04_features/hero-background/ui"

export const HomeHeroBg = () => (
  <HeroBackgroundRoot>
    <HeroGradientLayer />
    <HeroShadeOverlay />
    <HeroStripes />
  </HeroBackgroundRoot>
)
