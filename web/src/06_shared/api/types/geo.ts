
export type TApiGeoLocationResponse = {
  ipVersion: number
  ipAddress: string
  latitude: number
  longitude: number
  countryName: string
  countryCode: string
  capital: string
  phoneCodes: string[]
  timeZones: string[]
  zipCode: string
  cityName: string
  regionName: string | null
  regionCode: string | null
  continent: string
  continentCode: string
  currencies: string[]
  languages: string[]
  asn: string
  asnOrganization: string
  isProxy: boolean
}
