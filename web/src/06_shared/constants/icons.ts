import type { ComponentType } from "react"

import { IconBangladeshFlag } from "@/src/06_shared/ui/icons/bangladesh-flag"
import { IconBarLineChartSolid } from "@/src/06_shared/ui/icons/bar-line-chart-solid"
import { IconBitcoinWalletSolid } from "@/src/06_shared/ui/icons/bitcoin-wallet-solid"
import { IconBtc } from "@/src/06_shared/ui/icons/btc"
import { IconCanadaFlag } from "@/src/06_shared/ui/icons/canada-flag"
import { IconChinaFlag } from "@/src/06_shared/ui/icons/china-flag"
import { IconClockSolid } from "@/src/06_shared/ui/icons/clock-solid"
import { IconCreditCardArrowSolid } from "@/src/06_shared/ui/icons/credit-card-arrow-solid"
import { IconCreditCardSolid } from "@/src/06_shared/ui/icons/credit-card-solid"
import { IconEth } from "@/src/06_shared/ui/icons/eth"
import { IconGlobeSolid } from "@/src/06_shared/ui/icons/globe-solid"
import { IconLogo, IconLogoFull } from "@/src/06_shared/ui/icons/logo"
import { IconMastercardLogo } from "@/src/06_shared/ui/icons/mastercard-logo"
import { IconMinus } from "@/src/06_shared/ui/icons/minus"
import { IconPhysicalCard } from "@/src/06_shared/ui/icons/physical-card"
import { IconPlus } from "@/src/06_shared/ui/icons/plus"
import { IconRoundaboutSolid } from "@/src/06_shared/ui/icons/roundabout-solid"
import { IconTelegram } from "@/src/06_shared/ui/icons/telegram"
import { IconUsd } from "@/src/06_shared/ui/icons/usd"
import { IconWalletSolid } from "@/src/06_shared/ui/icons/wallet-solid"
import { IconCapabilityUsdtCoin } from "@/src/06_shared/ui/icons/capability-usdt-coin"
import { IconCapabilityEuroCoin } from "@/src/06_shared/ui/icons/capability-euro-coin"
import { IconCapabilityArrowThroughCoins } from "@/src/06_shared/ui/icons/capability-arrow-through-coins"
import { IconCapabilityPrivacy } from "@/src/06_shared/ui/icons/capability-privacy"
import { IconJourneyStepsStraightSolid, IconJourneyStepsCurvedSolid } from "@/src/06_shared/ui/icons/journey-steps-solid"
import { IconDashLineFromBangladeshToCanada, IconDashLineFromBangladeshToChina } from "@/src/06_shared/ui/icons/dash-line-from-to-flag"
import { IconChecked } from "@/src/06_shared/ui/icons/checked"
import { IconDoneBgGradient, IconDoneSolid } from "@/src/06_shared/ui/icons/done"
import { IconCopy } from "@/src/06_shared/ui/icons/copy"
import { IconArrowFullSolid, IconArrowShortSolid } from "@/src/06_shared/ui/icons/arrow"
import { IconBlingSolid } from "@/src/06_shared/ui/icons/bling-solid"

export const ICONS = {
  logo: IconLogo,
  logoFull: IconLogoFull,
  telegram: IconTelegram,
  physicalCard: IconPhysicalCard,
  chinaFlag: IconChinaFlag,
  canadaFlag: IconCanadaFlag,
  bangladeshFlag: IconBangladeshFlag,
  mastercardLogo: IconMastercardLogo,
  barLineChartSolid: IconBarLineChartSolid,
  creditCardArrowSolid: IconCreditCardArrowSolid,
  creditCardSolid: IconCreditCardSolid,
  globeSolid: IconGlobeSolid,
  walletSolid: IconWalletSolid,
  plus: IconPlus,
  minus: IconMinus,
  roundaboutSolid: IconRoundaboutSolid,
  clockSolid: IconClockSolid,
  bitcoinWalletSolid: IconBitcoinWalletSolid,
  usd: IconUsd,
  btc: IconBtc,
  eth: IconEth,
  capabilityUsdtCoin: IconCapabilityUsdtCoin,
  capabilityEuroCoin: IconCapabilityEuroCoin,
  capabilityArrowThroughCoins: IconCapabilityArrowThroughCoins,
  capabilityPrivacy: IconCapabilityPrivacy,
  journeyStepsStraightSolid: IconJourneyStepsStraightSolid,
  journeyStepsCurvedSolid: IconJourneyStepsCurvedSolid,
  dashLineFromBangladeshToCanada: IconDashLineFromBangladeshToCanada,
  dashLineFromBangladeshToChina: IconDashLineFromBangladeshToChina,
  checked: IconChecked,
  doneBgGradient: IconDoneBgGradient,
  doneSolid: IconDoneSolid,
  copy: IconCopy,
  arrowFullSolid: IconArrowFullSolid,
  arrowShortSolid: IconArrowShortSolid,
  blingSolid: IconBlingSolid,
} as const satisfies Record<string, ComponentType>
