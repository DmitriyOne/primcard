import { paths, TEXT } from "@/src/06_shared/constants"
import { Z_INDEX_CLASSES } from "@/src/06_shared/constants/z-indexs"
import { cn } from "@/src/06_shared/libs"
import { Button, Link, Paragraph, Section, Title } from "@/src/06_shared/ui"

type TProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export const GlobalErrorPage = ({ reset }: TProps) => {

  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-30 lg:pt-46",
        "pb-16 lg:pb-30",
      )}
    >
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
            "text-[180px] md:text-[300px] lg:text-[440px]",
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
          {TEXT.GLOBAL_ERROR.BACK_TITLE}
        </span>
        <div className="transform translate-y-[20px] lg:translate-y-[30px]">
          <Title
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
          >
            {TEXT.GLOBAL_ERROR.TITLE}
          </Title>
          <Paragraph className="max-w-3xs md:max-w-lg mx-auto mb-8 md:mb-10">
            {TEXT.GLOBAL_ERROR.DESCRIPTION}
          </Paragraph>

          <div
            className={cn(
              "w-full max-w-3xs md:max-w-full mx-auto",
              "flex flex-col md:flex-row items-center justify-center",
              "gap-4",
            )}
          >
            <Link
              variant='secondary'
              href={paths.home}
              className="w-full md:w-fit text-base md:text-xl"
            >
              {TEXT.GLOBAL_ERROR.BUTTON_GO_HOME}
            </Link>
            <Button
              variant='ghost'
              className="w-full md:w-fit text-base md:text-xl"
              onClick={reset}
            >
              {TEXT.GLOBAL_ERROR.BUTTON_RELOAD_PAGE}
            </Button>
          </div>

        </div>
      </div>
    </Section>
  )
}
