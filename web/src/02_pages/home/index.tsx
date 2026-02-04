import { Faq } from "@/src/03_widgets/faq/ui"
import { anchors } from "@/src/06_shared/constants"

import { Cta } from "@/src/03_widgets/cta/ui"
import { HomeHero } from "@/src/03_widgets/home-hero/ui"
import { Usage } from "@/src/03_widgets/usage/ui"
import { Philosophy } from "@/src/03_widgets/philosophy/ui"
import { Capabilities } from "@/src/03_widgets/capabilities/ui"
import { Journey } from "@/src/03_widgets/journey/ui"
import { HomeOverview } from "@/src/03_widgets/home-overview/ui"
import { Plans } from "@/src/03_widgets/plans/ui"

export const HomePage = () => {

  return (
    <>
      <HomeHero />
      <HomeOverview />
      <Capabilities id={anchors.features} />
      <Journey id={anchors.how} />
      <Usage />
      <Philosophy />
      <Plans id={anchors.plans} />
      <Faq id={anchors.faq} />
      <Cta />
    </>
  )
}
