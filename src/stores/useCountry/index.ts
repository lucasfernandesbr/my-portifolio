import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import i18n from '@/i18n'

import { useCountryState } from './types'

const useCountry = create<useCountryState>()(
  persist(
    (set) => ({
      country: 'us',

      toggleCountry: (country) => {
        set({ country })
        i18n.changeLanguage(country)
      },
    }),
    {
      name: 'language',
      onRehydrateStorage: () => (state) => {
        if (state) i18n.changeLanguage(state.country)
      },
    },
  ),
)

export default useCountry
