import { TERMS_CONTENT } from "@/src/03_widgets/policy-content/constants/terms"
import { PolicyContent } from "@/src/03_widgets/policy-content/ui"
import { cn } from "@/src/06_shared/libs"
import { Section } from "@/src/06_shared/ui"

export const TermsAndConditionsPage = () => {

  return (
    <Section
      className={cn(
        "flex-1 flex",
        "pt-28 lg:pt-44",
        "pb-16 lg:pb-24",
      )}
    >
      <div
        className={cn(
          "relative",
          "flex-1 flex flex-col items-center justify-center",
          "text-center",
          "w-full max-w-3xl mx-auto",
        )}
      >
        <PolicyContent content={TERMS_CONTENT} />
      </div>
    </Section>
  )
}
