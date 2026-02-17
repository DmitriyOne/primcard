"use client"

import { INPUT_IDS, TEXT, TOrderPlanTextKey } from "@/src/06_shared/constants"
import { cn } from "@/src/06_shared/libs"
import { Button, Checkbox, Input, Select } from "@/src/06_shared/ui"

import { PhoneInput } from "@/src/05_entities/phone-input/ui"

import { useOrderForm } from "../model/hooks"
import { PREFERRED_CONTACT_OPTIONS } from "../config"

import { AgreementLabel } from "./agreement-label"

type TProps = {
  textKey: TOrderPlanTextKey
}

export const OrderForm = ({ textKey }: TProps) => {
  const {
    state,
    formAction,
    isPending,
    selectedContactMethod,
    handleSetSelectedContactMethod,
    shouldShowContactUsername,
    shouldShowPhoneInput,
  } = useOrderForm()

  return (
    <form
      className={cn(
        "flex flex-col gap-y-5 md:gap-y-6",
        "w-full",
      )}
      action={formAction}
    >
      <Input
        id={INPUT_IDS.email}
        label={TEXT.ORDER[textKey].FORM.ITEMS[0].LABEL}
        placeholder={TEXT.ORDER[textKey].FORM.ITEMS[0].PLACEHOLDER}
        errors={state.errors?.email || null}
        inputMode="email"
        required
        defaultValue={state.fields?.email || ""}
      />
      <input
        type="hidden"
        name={INPUT_IDS.contact_method}
        value={selectedContactMethod || ""}
        className="sr-only"
      />
      <Select
        options={PREFERRED_CONTACT_OPTIONS}
        value={selectedContactMethod}
        onChange={handleSetSelectedContactMethod}
        label={TEXT.ORDER[textKey].FORM.ITEMS[3].LABEL}
        placeholder={TEXT.ORDER[textKey].FORM.ITEMS[3].PLACEHOLDER}
        optionIconClassName="w-4 h-4"
        required
        errors={state.errors?.contact_method || null}
      />
      {shouldShowContactUsername && (
        <Input
          id={INPUT_IDS.username}
          label={TEXT.ORDER[textKey].FORM.ITEMS[1].LABEL}
          placeholder={`${TEXT.ORDER[textKey].FORM.ITEMS[1].PLACEHOLDER} for ${selectedContactMethod}`}
          errors={state.errors?.username || null}
          inputMode="text"
          required
          defaultValue={state.fields?.username || ""}
        />
      )}
      {shouldShowPhoneInput && (
        <PhoneInput
          textKey={textKey}
          isPending={false}
          errors={state.errors?.phone || null}
          required
          defaultValue={state.fields?.phone || ""}
        />
      )}
      <Checkbox
        id={INPUT_IDS.agreement}
        label={<AgreementLabel textKey={textKey} />}
        className="my-3 md:my-4"
        defaultChecked={true}
        errors={state.errors?.agreement || null}
      />
      <Button
        type="submit"
        variant="secondary"
        className={cn(
          "text-base md:text-xl",
          "font-bold",
          "py-3",
        )}
        disabled={isPending}
      >
        {isPending
          ? TEXT.ORDER[textKey].FORM.ITEMS[5].LOADING_LABEL
          : TEXT.ORDER[textKey].FORM.ITEMS[5].LABEL
        }
      </Button>
    </form>
  )
}

