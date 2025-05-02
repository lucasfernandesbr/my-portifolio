import { Country } from '@/types/global'

export type ContextType = {
  country: Country
  toggleCountry: () => void
}

export type ProviderProps = {
  children: React.ReactNode
}
