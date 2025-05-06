import { scrollToId } from '@/utils/scrollToId'

import Anchor from '@Atoms/Anchor'
import Container from '@Atoms/Container'
import Icon from '@Atoms/Icon'
import CountrySwitch from '@Molecules/CountrySwitch'

import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ content }) => {
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

export default Header
