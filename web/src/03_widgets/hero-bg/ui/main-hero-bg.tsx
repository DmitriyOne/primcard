import { HeroBackgroundBlur, HeroBackgroundRoot, HeroGradientLayer, HeroShadeOverlay } from "@/src/04_features/hero-background/ui"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants/z-indexs"

export const MainHeroBg = () => {
  return (
    <HeroBackgroundRoot className={Z_INDEX_CLASSES.HERO_BACKGROUND_ROOT}>
      <HeroBackgroundBlur />
      <HeroGradientLayer />
      <HeroShadeOverlay />
    </HeroBackgroundRoot>
  )
}
