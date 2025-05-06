import { scrollToId } from '@/utils/scrollToId'

import Anchor from '@Atoms/Anchor'
import Container from '@Atoms/Container'

import { FooterProps } from './types'

const Footer: React.FC<FooterProps> = ({ content }) => {
  const { nav, socials, copyright } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex w-full items-center justify-between">
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
            {socials.map(({ href, icon }) => (
              <li>
                <Anchor href={href} icon={icon} variant="socialMedia" />
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-20 h-[1px] w-full" />

        <p>{copyright}</p>
      </div>
    </Container>
  )
}

export default Footer
