// CountryContext.tsx
import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Country } from '@/types/global'

// import i18n from '../path/para/seu/i18n' // ajuste o path certinho
import { ContextType, ProviderProps } from './types'

const CountryContext = createContext<ContextType>({} as ContextType)

export const Provider = ({ children }: ProviderProps) => {
  const [country, setCountry] = useState<Country>('us')

  const { i18n } = useTranslation()

  const toggleCountry = () => {
    const newCountry = country === 'us' ? 'br' : 'us'
    setCountry(newCountry)
    i18n.changeLanguage(newCountry === 'us' ? 'us' : 'br')
  }

  return (
    <CountryContext.Provider value={{ country, toggleCountry }}>
      {children}
    </CountryContext.Provider>
  )
}

export const useCountrySwitch = () => {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error(
      'useCountrySwitch must be used within a CountrySwitchProvider',
    )
  }

  return context
}
