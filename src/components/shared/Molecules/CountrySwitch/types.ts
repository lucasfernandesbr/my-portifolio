import { Country } from '@/types/global'

import { IconName } from '@Atoms/Icon'

type CountryFlag = {
  src: string
  alt: string
  label: string
}

export type CountrySwitchProps = {
  icon: IconName
  countries: Record<Country, CountryFlag>
}
