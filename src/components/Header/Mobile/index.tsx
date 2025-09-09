import { useState } from 'react'

import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import CountrySwitch from '@components/Header/CountrySwitch'
import Icon from '@components/Icon'

import DarkModeSwitch from '../DarkModeSwitch'
import { HeaderProps } from '../types'

export default function Mobile({ content }: HeaderProps) {
  const { nav, countries } = content

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-brand-white dark:bg-brand-black fixed top-0 z-9999 w-full">
      <div className="p-6">
        <div className="flex justify-between">
          <button onClick={handleOpenMenu}>
            {!isOpen ? (
              <Icon
                type="Menu"
                className="text-brand-black dark:text-brand-white"
              />
            ) : (
              <Icon
                type="X"
                className="text-brand-black dark:text-brand-white"
              />
            )}
          </button>

          <ul className="flex gap-8">
            <li>
              <DarkModeSwitch />
            </li>
            <li>
              <CountrySwitch icon="ChevronDown" countries={countries} />
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="bg-brand-white dark:bg-brand-black flex h-[calc(100dvh-72px)] w-full flex-col items-center justify-center">
            <ul className="flex flex-col gap-14">
              {nav.map(({ id, label }) => (
                <li>
                  <Anchor
                    label={label}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      scrollToId(e, id)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
