import { useCountrySwitch } from '@contexts/CountrySwitch'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/DropdownMenu'
import Icon from '@components/Icon'

import { CountrySwitchProps } from './types'

export default function CountrySwitch({ icon, countries }: CountrySwitchProps) {
  const { country, toggleCountry } = useCountrySwitch()

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
            src={countries[country].src}
            alt={countries[country].alt}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {formatCountries.map(({ country, src, alt, label }) => (
          <DropdownMenuItem onClick={() => toggleCountry(country)}>
            <img className="h-[20px] w-[20px]" src={src} alt={alt} />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
