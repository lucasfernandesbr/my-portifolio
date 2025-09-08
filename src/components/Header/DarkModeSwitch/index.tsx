import UseDarkModeTheme from '@/stores/UseDarkModeTheme'

import Icon from '@components/Icon'

export default function DarkModeSwitch() {
  const { isDarkMode, toggle } = UseDarkModeTheme()

  const icon = isDarkMode ? 'Sun' : 'Moon'

  return (
    <button onClick={toggle}>
      <Icon type={icon} className="text-brand-black dark:text-brand-white" />
    </button>
  )
}
