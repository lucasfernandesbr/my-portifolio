import { scrollToId } from '@/utils/scrollToId'

import Anchor from '@Atoms/Anchor'
import Container from '@Atoms/Container'
import Markdown from '@Atoms/Markdown'
import Text from '@Atoms/Text'

import { HeroProps } from './types'

const Hero: React.FC<HeroProps> = ({ content }) => {
  const { id, title, ready_online, buttons } = content

  return (
    <Container id={id}>
      <div className="flex w-full flex-col gap-12 pt-20 pb-20">
        <div className="flex items-center">
          <img
            src={ready_online.avatar.src}
            alt={ready_online.avatar.alt}
            className="bg-gray-30 mr-4 h-[52px] w-[52px] rounded-full object-cover"
          />
          <div className="bg-support-02 mr-2 h-[8px] w-[8px] rounded-full" />
          <Text className="text-xs font-semibold uppercase">
            {ready_online.label}
          </Text>
        </div>

        <h1 className="text-brand-black text-7xl font-extrabold">
          <Markdown content={title} />
        </h1>

        <div className="flex gap-4">
          <Anchor
            label={buttons.scroll_down.label}
            icon={buttons.scroll_down.icon}
            variant="button"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              scrollToId(e, buttons.scroll_down.href)
            }
          />

          {buttons.socials.map(({ href, icon }) => (
            <Anchor href={href} icon={icon} variant="socialMedia" />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Hero
