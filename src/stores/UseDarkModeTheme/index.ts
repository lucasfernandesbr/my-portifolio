import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { UseDarkModeThemeState } from './types'

const applyDarkMode = (value: boolean) => {
  document.documentElement.classList.toggle('dark', value)
}

const useDarkModeTheme = create<UseDarkModeThemeState>()(
  persist(
    (set, get) => ({
      isDarkMode: false,

      setDarkMode: (value) => {
        set({ isDarkMode: value })
        applyDarkMode(value)
      },

      toggle: () => {
        const next = !get().isDarkMode
        get().setDarkMode(next)
      },
    }),
    {
      name: 'theme',
      onRehydrateStorage: () => (state) => {
        if (state) applyDarkMode(state.isDarkMode)
      },
    },
  ),
)

export default useDarkModeTheme
