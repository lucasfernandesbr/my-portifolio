import { create } from 'zustand'

import { UseDarkModeThemeState } from './types'

const useDarkModeTheme = create<UseDarkModeThemeState>((set, get) => ({
  isDarkMode: false,

  setDarkMode: (value) => {
    set({ isDarkMode: value })
    document.documentElement.classList.toggle('dark', value)
  },

  toggle: () => {
    const newIsDarkModeState = !get().isDarkMode
    get().setDarkMode(newIsDarkModeState)
  },
}))

export default useDarkModeTheme
