import { MainHeroBg } from "@/src/03_widgets/hero-bg/ui"
import { paths, TEXT } from "@/src/06_shared/constants"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants/z-indexs"
import { cn } from "@/src/06_shared/libs"
import { Link, Paragraph, Section, Title } from "@/src/06_shared/ui"

export const NotFoundPage = () => {
  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-36 lg:pt-52",
        "pb-16 lg:pb-32",
      )}
    >
      <MainHeroBg />
      <div
        className={cn(
          "relative",
          "flex-1 flex flex-col items-center justify-center",
          "text-center",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center",
            "text-[280px] md:text-[360px] lg:text-[520px]",
            "font-bold leading-none",
            "text-center",
            "text-white/8",
            "absolute",
            "top-1/2 left-1/2",
            "transform -translate-x-1/2 -translate-y-1/2",
            Z_INDEX_CLASSES.ERROR_BACKGROUND_TEXT,
            "select-none",
          )}
        >
          {TEXT.NOT_FOUND.BACK_TITLE}
        </span>
        <div className="transform translate-y-[6px] lg:translate-y-[14px]">
          <Title
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
          >
            {TEXT.NOT_FOUND.TITLE}
          </Title>
          <Paragraph className="mb-8 md:mb-10">
            {TEXT.NOT_FOUND.DESCRIPTION}
          </Paragraph>
          <Link
            variant='secondary'
            href={paths.home}
            className="text-base md:text-xl px-6 md:px-18"
          >
            {TEXT.NOT_FOUND.BUTTON_TEXT}
          </Link>
        </div>
      </div>
    </Section>
  )
}
