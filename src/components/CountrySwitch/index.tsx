import { useCountrySwitch } from '@contexts/CountrySwitch'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/DropdownMenu'
import Icon from '@components/Icon'

import useAssets from '@assets'

import { CountrySwitchProps } from './types'

export default function CountrySwitch({ icon, countries }: CountrySwitchProps) {
  const { country, toggleCountry } = useCountrySwitch()
  const { flags } = useAssets()

  const formatCountries: any[] = Object.entries(countries).map(
    ([key, value]) => ({ country: key, ...value }),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:ring-0 focus:outline-none">
        <button className="flex cursor-pointer items-center gap-2">
          <Icon type={icon} size={16} />
          <img
            className="h-[24px] w-[24px]"
            src={flags[countries[country].key]}
            alt={flags[countries[country].alt]}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {formatCountries.map(({ country, key, alt, label }) => {
          return (
            <DropdownMenuItem onClick={() => toggleCountry(country)}>
              <img className="h-[20px] w-[20px]" src={flags[key]} alt={alt} />
              {label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
