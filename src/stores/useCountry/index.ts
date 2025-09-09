import { create } from 'zustand'

import i18n from '@/i18n'

import { useCountryState } from './types'

const useCountry = create<useCountryState>((set) => ({
  country: 'us',

  toggleCountry: (country) => {
    set({ country })
    i18n.changeLanguage(country)
  },
}))

export default useCountry
