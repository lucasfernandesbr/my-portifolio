import Container from '@Atoms/Container'
import Icon from '@Atoms/Icon'
import Markdown from '@Atoms/Markdown'
import Text from '@Atoms/Text'

import { HeroProps } from './types'

const Hero: React.FC<HeroProps> = ({ content }) => {
  const { title, ready_online, buttons } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-20 pb-20">
        <div className="flex items-center">
          <div className="bg-gray-30 mr-4 h-[52px] w-[52px] rounded-full" />
          <div className="bg-support-02 mr-2 h-[8px] w-[8px] rounded-full" />
          <Text className="text-xs font-semibold uppercase">
            {ready_online.label}
          </Text>
        </div>

        <h1 className="text-brand-black text-7xl font-extrabold">
          <Markdown content={title} />
        </h1>

        <div className="flex gap-4">
          <button
            type="button"
            className="bg-brand-black text-brand-white flex h-[40px] items-center justify-center gap-1 rounded-lg p-3"
          >
            {buttons.scroll_down.label}
            {buttons.scroll_down.icon && (
              <Icon type={buttons.scroll_down.icon} />
            )}
          </button>

          {buttons.socials.map(({ href, icon }) => (
            <a
              className="bg-gray-20 flex h-[40px] w-[40px] items-center justify-center rounded-lg"
              href={href}
              target="_blank"
            >
              <Icon type={icon} size={20} color="#48494F" />
            </a>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Hero
