import { paths, TEXT, TOrderPlanTextKey } from "@/src/06_shared/constants"
import Link from "next/link"

type TProps = {
  textKey: TOrderPlanTextKey
}
export const AgreementLabel = ({ textKey }: TProps) => {
  const { START, TERMS, AND, PRIVACY, END } = TEXT.ORDER[textKey].FORM.ITEMS[4].AGREEMENT_LABEL

  return (
    <>
      {START}
      <Link
        href={paths.terms_and_conditions}
        className="underline underline-offset-4"
        target="_blank"
      >
        {TERMS}
      </Link>
      {AND}
      <Link
        href={paths.privacy}
        className="underline underline-offset-4"
        target="_blank"
      >
        {PRIVACY}
      </Link>
      {END}
    </>
  )
}
