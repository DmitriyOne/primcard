import { paths } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/lib"
import { ActiveLink, Icon } from "@/src/06_shared/ui"

type TProps = {
  className?: string
  isShowShortIconOnMobile?: boolean
}

export const Logo = ({
  className,
  isShowShortIconOnMobile,
}: TProps) => {

  return (
    <ActiveLink
      href={paths.home}
      className={cn(
        "w-26 md:w-36",
        className,
      )}
    >
      {isShowShortIconOnMobile && (
        <Icon
          id="logo"
          className="md:hidden"
        />
      )}

      <Icon
        id="logoFull"
        className={cn(
          isShowShortIconOnMobile && "hidden md:block",
        )}
      />
    </ActiveLink>
  )
}

