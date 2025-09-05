import { useEffect } from 'react'

import { scrollToId } from '@utils/scrollToId'

import Anchor from '@components/Anchor'
import Container from '@components/Container'
import Markdown from '@components/Markdown'
import Text from '@components/Text'

import useAssets from '@assets'

import { HeroProps } from './types'

export default function Hero({ content }: HeroProps) {
  const { id, title, ready_online, buttons } = content

  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <Container id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:mt-18 xs:max-w-[468px] flex w-full flex-col items-center gap-12 lg:mt-0 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="flex items-center">
            <img
              src={images[ready_online.avatar.key]}
              alt={ready_online.avatar.alt}
              className="bg-gray-30 mr-4 h-[52px] w-[52px] rounded-full object-cover"
            />
            <div className="bg-support-02 mr-2 h-[8px] w-[8px] rounded-full" />
            <Text className="text-xs font-semibold uppercase">
              {ready_online.label}
            </Text>
          </div>

          <h1 className="text-brand-black xs:text-4xl text-center font-extrabold md:text-5xl lg:text-7xl">
            <Markdown content={title} />
          </h1>

          <div className="flex gap-4">
            {buttons.socials.map(({ href, icon }) => (
              <Anchor href={href} icon={icon} variant="socialMedia" />
            ))}
          </div>

          <div className="flex">
            <Anchor
              label={buttons.scroll_down.label}
              icon={buttons.scroll_down.icon}
              variant="button"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                scrollToId(e, buttons.scroll_down.href)
              }
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
