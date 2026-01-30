import { paths } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
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
        "w-36",
        className,
      )}
    >
      {isShowShortIconOnMobile && (
        <Icon
          id="logo"
          background={{
            className: "md:hidden w-8",
          }}
        />
      )}

      <Icon
        id="logoFull"
        className="w-full h-full"
        background={{
          className: cn(isShowShortIconOnMobile && "hidden md:block"),
        }}
      />
    </ActiveLink>
  )
}
