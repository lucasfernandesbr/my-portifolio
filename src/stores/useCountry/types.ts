import { Country } from '@/types/global'

export type useCountryState = {
  country: Country
  toggleCountry: (_country: Country) => void
}
