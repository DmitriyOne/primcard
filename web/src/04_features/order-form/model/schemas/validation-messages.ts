export const ORDER_FORM_VALIDATION_MESSAGES = {
  email: {
    required: "Email is required",
    invalid: "Invalid email address",
  },
  username: {
    required: "Username is required",
    min_length: "Username must be at least 2 characters long",
  },
  phone: {
    required: "Phone is required",
    invalid: "Invalid phone number",
    min_length: "Phone number must be at least 7 characters long",
    max_length: "Phone number must be less than 15 characters long",
    invalid_format: "The number does not valid for the selected country",
  },
  country_code: {
    required: "Country code is required",
    invalid: "Invalid country code",
  },
  contact_method: {
    required: "Contact method is required",
    invalid: "Invalid contact method",
  },
  agreement: {
    required: "Agreement is required",
  },
}
