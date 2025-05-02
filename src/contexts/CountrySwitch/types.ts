import { Country } from '@/types/global'

export type ContextType = {
  country: Country
  toggleCountry: (_country: Country) => void
}

export type ProviderProps = {
  children: React.ReactNode
}
