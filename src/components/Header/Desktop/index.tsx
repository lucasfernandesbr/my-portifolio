import React from 'react'

import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import Container from '@components/Container'
import CountrySwitch from '@components/CountrySwitch'
import Icon from '@components/Icon'

import DarkModeSwitch from '../DarkModeSwitch'
import { HeaderProps } from '../types'

export default function Desktop({ content }: HeaderProps) {
  const { logo, nav, countries } = content

  return (
    <div className="bg-brand-white dark:bg-brand-black fixed top-0 z-9999 w-full">
      <Container>
        <div className="flex h-[88px] w-full items-center justify-between">
          <Icon
            className="text-brand-black dark:text-brand-white"
            type={logo}
          />

          <ul className="flex gap-14">
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

          <ul className="flex gap-8">
            <li>
              <DarkModeSwitch />
            </li>
            <li>
              <CountrySwitch icon="ChevronDown" countries={countries} />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
