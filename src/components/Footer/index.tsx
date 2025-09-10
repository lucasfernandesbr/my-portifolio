import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import Container from '@components/Container'

import { FooterProps } from './types'

export default function Footer({ content }: FooterProps) {
  const { nav, socials, copyright } = content

  return (
    <Container>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:gap-12 xs:max-w-[468px] flex w-full flex-col gap-12 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="xs:flex-col-reverse xs:gap-10 flex w-full items-center justify-between lg:flex-row">
            <ul className="xs:flex-col flex gap-14 lg:flex-row">
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
              {socials.map(({ href, icon }) => (
                <li>
                  <Anchor href={href} icon={icon} variant="socialMedia" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-20 dark:bg-gray-80 h-[1px] w-full" />

          <p className="xs:text-center lg:text-left">{copyright}</p>
        </div>
      </div>
    </Container>
  )
}
