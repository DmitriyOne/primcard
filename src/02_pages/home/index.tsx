import { Faq } from "@/src/03_widgets/faq/ui"
import { TEXT } from "@/src/06_shared/constants"

import { Cta } from "@/src/03_widgets/cta/ui"
import { HomeHero } from "@/src/03_widgets/home-hero/ui"
import { Usage } from "@/src/03_widgets/usage/ui"
import { Philosophy } from "@/src/03_widgets/philosophy/ui"
import { Capabilities } from "@/src/03_widgets/сapabilities/ui"
import { Journey } from "@/src/03_widgets/journey/ui"
import { HomeOverview } from "@/src/03_widgets/home-overview/ui"

export const HomePage = () => {

  return (
    <>
      <HomeHero />
      <HomeOverview />
      <Capabilities />
      <Journey />
      <Usage />
      <Philosophy />
      <Faq
        title={TEXT.HOME.FAQ.TITLE}
        questions={TEXT.HOME.FAQ.QUESTIONS.map((item) => ({
          title: item.TITLE,
          content: item.CONTENT,
        }))}
      />
      <Cta />
    </>
  )
}
