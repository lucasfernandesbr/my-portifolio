import { Country } from '@/types/global'

import { IconName } from '@components/Icon'

type CountryFlag = {
  key: string
  alt: string
  label: string
}

export type CountrySwitchProps = {
  icon: IconName
  countries: Record<Country, CountryFlag>
}
