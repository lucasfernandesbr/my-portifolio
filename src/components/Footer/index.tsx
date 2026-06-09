import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import Section from '@components/Section'

import { FooterProps } from './types'

export default function Footer({ content }: FooterProps) {
  const { nav, socials, copyright } = content

  return (
    <Section>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] flex w-full flex-col gap-10 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="xs:flex-col-reverse xs:gap-8 flex w-full items-center justify-between lg:flex-row">
            <ul className="xs:flex-col xs:items-center flex gap-14 lg:flex-row">
              {nav.map(({ id, label }) => (
                <li key={id}>
                  <Anchor
                    label={label}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      scrollToId(e, id)
                    }
                  />
                </li>
              ))}
            </ul>

            <ul className="flex gap-3">
              {socials.map(({ href, icon }) => (
                <li key={href}>
                  <Anchor href={href} icon={icon} variant="socialMedia" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-border-ui h-[1px] w-full" />

          <p className="text-muted-fg xs:text-center text-sm lg:text-left">
            {copyright}
          </p>
        </div>
      </div>
    </Section>
  )
}
