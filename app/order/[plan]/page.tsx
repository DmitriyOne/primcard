import { OrderPage } from "@/src/02_pages/order"
import { ORDER_PLAN_SLUGS, type TOrderPlanSlug } from "@/src/06_shared/constants"

type TParams = {
  plan: TOrderPlanSlug
}

type TProps = {
  params: Promise<TParams>
}

export const dynamicParams = false

// export const metadata: Metadata = {

// }

export function generateStaticParams() {
  return ORDER_PLAN_SLUGS.map((plan) => ({ plan }))
}

export default async function Order({ params }: TProps) {
  const { plan } = await params

  return <OrderPage plan={plan} />
}
