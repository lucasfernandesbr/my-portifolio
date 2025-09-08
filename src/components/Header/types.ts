import { Country } from '@/types/global'

import { IconName } from '@components/Icon'

type CountryFlag = {
  key: string
  alt: string
  label: string
}

type NavItem = {
  id: string
  label: string
}

export type HeaderContent = {
  logo: IconName
  nav: NavItem[]
  countries: Record<Country, CountryFlag>
}

export type HeaderProps = {
  content: HeaderContent
}
