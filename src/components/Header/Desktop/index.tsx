import React from 'react'

import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import CountrySwitch from '@components/Header/CountrySwitch'
import Icon from '@components/Icon'
import Section from '@components/Section'

import DarkModeSwitch from '../DarkModeSwitch'
import { HeaderProps } from '../types'

export default function Desktop({ content }: HeaderProps) {
  const { logo, nav, countries } = content

  return (
    <div className="bg-brand-white dark:bg-brand-black fixed top-0 z-9999 hidden w-full lg:block">
      <Section>
        <div className="p-6">
          <div className="flex h-[24px] w-full items-center justify-between">
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

            <ul className="flex h-[24px] gap-8">
              <li>
                <DarkModeSwitch />
              </li>
              <li>
                <CountrySwitch icon="ChevronDown" countries={countries} />
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
