import { useEffect, useRef } from 'react'
import { animate, stagger } from 'motion'

import { scrollToId } from '@utils/scrollToId'

import useAssets from '@stores/useAssets'

import Anchor from '@components/Anchor'
import Markdown from '@components/Markdown'
import Section from '@components/Section'

import { HeroProps } from './types'

export default function Hero({ content }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  const { id, title, ready_online, buttons } = content

  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  const words =
    title
      .match(/\S+/g)
      ?.map((word) => `<span class="span-word inline-block">${word}</span>`)
      .join('&nbsp;') ?? ''

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  useEffect(() => {
    const titleElement = titleRef.current

    if (!titleElement) return

    const spans = Array.from(titleElement.querySelectorAll('.span-word'))

    animate(
      spans,
      { opacity: [0, 1], y: [20, 0] },
      {
        duration: 0.4,
        delay: stagger(0.025),
        ease: 'easeInOut',
      },
    )
  }, [])

  return (
    <Section id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] mt-18 flex w-full flex-col items-center gap-12 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="flex items-center">
            <img
              src={images[ready_online.avatar.key]}
              alt={ready_online.avatar.alt}
              className="bg-gray-30 mr-4 h-[52px] w-[52px] rounded-full object-cover"
            />
            <div className="bg-support-02 mr-2 h-[8px] w-[8px] rounded-full" />
            <p className="text-xs font-semibold uppercase">
              {ready_online.label}
            </p>
          </div>

          <h1
            ref={titleRef}
            className="text-brand-black xs:text-4xl text-center font-extrabold md:text-5xl lg:text-7xl"
          >
            <Markdown content={words} />
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
    </Section>
  )
}
