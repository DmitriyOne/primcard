import { useActionState, useCallback, useEffect, useState } from "react"
import { TOrderFormActionState } from "../types"
import { orderAction } from "../actions"
import { REQUIRED_PHONE_FOR_CONTACT_METHOD, REQUIRED_USERNAME_FOR_CONTACT_METHOD } from "../../config"

const initialState: TOrderFormActionState = {
  success: false,
  errors: null,
}

export const useOrderForm = () => {
  const [selectedContactMethod, setSelectedContactMethod] = useState<string | null>(null)
  const [state, formAction, isPending] = useActionState(orderAction, initialState)

  useEffect(() => {
    if (state.success) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedContactMethod(null)
    }
  }, [state])

  const shouldShowContactUsername = 
    !!selectedContactMethod && REQUIRED_USERNAME_FOR_CONTACT_METHOD.includes(selectedContactMethod)

  const shouldShowPhoneInput = 
    !!selectedContactMethod && REQUIRED_PHONE_FOR_CONTACT_METHOD.includes(selectedContactMethod)

  const handleSetSelectedContactMethod = useCallback((value: string) => {
    setSelectedContactMethod(value)
  }, [])
  
  return {
    state,
    formAction,
    isPending,
    selectedContactMethod,
    handleSetSelectedContactMethod,
    shouldShowContactUsername,
    shouldShowPhoneInput,
  }
}
