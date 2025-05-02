import Container from '@Atoms/Container'
import Icon from '@Atoms/Icon'

import { FooterProps } from './types'

const Footer: React.FC<FooterProps> = ({ content }) => {
  const { nav, socials, copyright } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex w-full items-center justify-between">
          <ul className="flex gap-14">
            {nav.map(({ label }) => (
              <li>{label}</li>
            ))}
          </ul>

          <ul className="flex gap-8">
            {socials.map(({ href, icon }) => (
              <li>
                <a
                  className="bg-gray-20 flex h-[40px] w-[40px] items-center justify-center rounded-lg"
                  href={href}
                  target="_blank"
                >
                  <Icon type={icon} size={20} color="#48494F" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[1px] w-full bg-neutral-200" />

        <p>{copyright}</p>
      </div>
    </Container>
  )
}

export default Footer
