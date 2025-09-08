import { create } from 'zustand'

export type UseDarkModeThemeState = {
  isDarkMode: boolean
  setDarkMode: (_value: boolean) => void
  toggle: () => void
}

const UseDarkModeTheme = create<UseDarkModeThemeState>((set, get) => ({
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

export default UseDarkModeTheme
