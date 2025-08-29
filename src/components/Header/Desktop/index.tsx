import React from 'react'

import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import Container from '@components/Container'
import CountrySwitch from '@components/CountrySwitch'
import Icon from '@components/Icon'

import { HeaderProps } from '../types'

export default function Desktop({ content }: HeaderProps) {
  const { logo, nav, mode_switch, countries } = content

  return (
    <Container>
      <div className="flex h-[88px] w-full items-center justify-between">
        <Icon type={logo} color="#212227" />

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
            <Icon type={mode_switch.dark} color="#212227" />
          </li>
          <li>
            <CountrySwitch icon="ChevronDown" countries={countries} />
          </li>
        </ul>
      </div>
    </Container>
  )
}
