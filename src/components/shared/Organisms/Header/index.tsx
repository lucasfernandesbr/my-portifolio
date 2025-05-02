import { ChevronDown, GitPullRequest, Moon } from 'react-feather'

import { useCountrySwitch } from '@/contexts/CountrySwitch'

import Container from '../../Atoms/Container'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ content }) => {
  const { toggleCountry } = useCountrySwitch()
  const { nav, flag } = content

  return (
    <Container>
      <div className="flex h-[88px] w-full items-center justify-between">
        <GitPullRequest />

        <ul className="flex gap-14">
          {nav.map(({ label }) => (
            <li>{label}</li>
          ))}
        </ul>

        <ul className="flex gap-8">
          <li>
            <Moon />
          </li>
          <li>
            <button className="flex items-center gap-2" onClick={toggleCountry}>
              <ChevronDown size={16} />
              <img
                className="h-[24px] w-[24px]"
                src={flag.src}
                alt={flag.alt}
              />
            </button>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
