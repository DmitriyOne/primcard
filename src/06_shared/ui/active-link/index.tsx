"use client"

import type { AnchorHTMLAttributes, PropsWithChildren } from "react"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/src/06_shared/lib"

type TProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren & {
    href: string
    activeClassName?: string
  }

export const ActiveLink = ({
  className,
  activeClassName,
  href,
  children,
  ...props
}: TProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  const componentClassName = cn(
    "block cursor-pointer transition-all duration-300",
    "font-inter font-medium",
    "text-lg text-dark-black tracking-tight leading-[140%]",
    !isActive && "lg:hover:underline",
    isActive && `cursor-default ${activeClassName}`,
    className,
  )

  if (isActive) {
    return (
      <div className={componentClassName}>
        {children}
      </div>
    )
  }

  return (
    <Link
      href={href}
      className={componentClassName}
      {...props}
    >
      {children}
    </Link>
  )
}
