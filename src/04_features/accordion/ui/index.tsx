"use client"

import { Icon, Paragraph, Title } from "@/src/06_shared/ui"
import { useAccordion } from "../hooks"
import { cn } from "@/src/06_shared/libs"
import { TAccordionItem } from "../types"

type TProps = TAccordionItem

export const Accordion = ({ title, content }: TProps) => {
  const { ref, isOpen, onToggle } = useAccordion()

  return (
    <div
      ref={ref}
      className="bg-gray-dark rounded-2xl py-5 px-6"
      aria-label="accordion"
    >
      <Title
        as="h4"
        className={cn(
          "flex items-start md:items-center justify-between gap-2",
          "text-left text-lg md:text-xl lg:text-xl font-medium",
          "cursor-pointer",
        )}
        aria-label={`Toggle ${title} section`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {title}
        <Icon
          id={isOpen ? "minus" : "plus"}
          className="w-full h-full"
          background={{
            className: "max-md:mt-1.5 w-5 h-5",
          }}
        />
      </Title>

      <div
        className={cn(
          "hidden",
          "mt-4 md:mt-5",
          isOpen && "block",
        )}
      >
        <Paragraph className="text-left text-gray-light">
          {content}
        </Paragraph>
      </div>
    </div>
  )
}
