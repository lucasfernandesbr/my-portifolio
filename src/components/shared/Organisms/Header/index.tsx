import { ChevronDown, GitPullRequest, Moon } from 'react-feather'

import locale from '@/locales/us'

import Container from '../../Atoms/Container'

const Header: React.FC = () => {
  return (
    <Container>
      <div className="flex h-[88px] w-full items-center justify-between">
        <GitPullRequest />

        <ul className="flex gap-14">
          <li>About me</li>
          <li>My Skills & Experiences</li>
          <li>Professional & Academic journeys</li>
          <li>FAQ</li>
        </ul>

        <ul className="flex gap-8">
          <li>
            <Moon />
          </li>
          <li className="flex items-center gap-2">
            <ChevronDown size={16} />
            <img
              className="h-[24px] w-[24px]"
              src={locale.header.flag}
              alt=""
            />
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
