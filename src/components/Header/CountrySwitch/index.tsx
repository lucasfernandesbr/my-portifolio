import { useState } from 'react'

import useCountry from '@/stores/useCountry'
import { Country } from '@/types/global'

import Icon from '@components/Icon'

import useAssets from '@assets'

import { CountrySwitchProps } from './types'

export default function CountrySwitch({ icon, countries }: CountrySwitchProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { country, toggleCountry } = useCountry()
  const { flags } = useAssets()

  const formatCountries: any[] = Object.entries(countries).map(
    ([key, value]) => ({ country: key, ...value }),
  )

  const handleSelectCountry = (selectedCountry: Country) => {
    toggleCountry(selectedCountry)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-2"
      >
        <Icon type={icon} size={16} />
        <img
          className="h-[24px] w-[24px]"
          src={flags[countries[country].key]}
          alt={flags[countries[country].alt]}
        />
      </button>

      {isOpen && (
        <div className="bg-brand-white dark:bg-brand-black border-gray-20 dark:border-gray-80 absolute top-14 right-0 w-max rounded-sm border p-2">
          <ul className="flex w-full flex-col">
            {formatCountries.map(({ country, key, alt, label }) => {
              return (
                <li
                  className="hover:bg-gray-20 dark:hover:bg-gray-80 flex w-full cursor-pointer items-center gap-3 rounded-sm p-2"
                  onClick={() => handleSelectCountry(country)}
                >
                  <img
                    className="h-[20px] w-[20px]"
                    src={flags[key]}
                    alt={alt}
                  />
                  {label}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
