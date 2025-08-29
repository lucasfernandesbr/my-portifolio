import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Country } from '@/types/global'

import { ContextType, ProviderProps } from './types'

const CountryContext = createContext<ContextType>({} as ContextType)

export function Provider({ children }: ProviderProps) {
  const [country, setCountry] = useState<Country>('us')

  const { i18n } = useTranslation()

  const toggleCountry = (country: Country) => {
    setCountry(country)
    i18n.changeLanguage(country)
  }

  return (
    <CountryContext.Provider value={{ country, toggleCountry }}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountrySwitch() {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error(
      'useCountrySwitch must be used within a CountrySwitchProvider',
    )
  }

  return context
}
