import { GitHub, Linkedin } from 'react-feather'

import Container from '../../Atoms/Container'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex w-full items-center justify-between">
          <ul className="flex gap-14">
            <li>About me</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Portifolio</li>
            <li>Personal goals</li>
          </ul>

          <ul className="flex gap-8">
            <li>
              <div>
                <button
                  type="button"
                  className="bg-gray-20 flex h-[40px] w-[40px] items-center justify-center rounded-lg"
                >
                  <GitHub size={20} color="#48494F" />
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  type="button"
                  className="bg-gray-20 flex h-[40px] w-[40px] items-center justify-center rounded-lg"
                >
                  <Linkedin size={20} color="#48494F" />
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="h-[1px] w-full bg-neutral-200" />

        <p>© 2025 Lucas Fernandes Souza. All rights reserved.</p>
      </div>
    </Container>
  )
}

export default Footer
