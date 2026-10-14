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

  const { images } = useAssets()

  const words =
    title
      .match(/\S+/g)
      ?.map((word) => `<span class="span-word inline-block">${word}</span>`)
      .join('&nbsp;') ?? ''

  useEffect(() => {
    const titleElement = titleRef.current
    if (!titleElement) return
    const spans = Array.from(titleElement.querySelectorAll('.span-word'))
    animate(
      spans,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.4, delay: stagger(0.025), ease: 'easeInOut' },
    )
  }, [])

  return (
    <Section id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] relative mt-18 flex w-full flex-col items-center gap-14 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(41,112,255,0.07)_0%,transparent_100%)]" />

          <div className="border-border-ui bg-surface flex items-center gap-3 rounded-full border px-4 py-2">
            <img
              src={images[ready_online.avatar.key]}
              alt={ready_online.avatar.alt}
              loading="eager"
              decoding="async"
              width={32}
              height={32}
              className="h-[32px] w-[32px] rounded-full object-cover"
            />
            <div className="relative flex h-[8px] w-[8px] items-center justify-center">
              <span className="bg-support-02 absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-support-02 relative inline-flex h-[8px] w-[8px] rounded-full" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase">
              {ready_online.label}
            </p>
          </div>

          <h1
            ref={titleRef}
            className="text-brand-black xs:text-4xl font-display text-center font-extrabold tracking-tight text-balance md:text-5xl lg:text-7xl"
          >
            <Markdown content={words} />
          </h1>

          <div className="flex gap-3">
            {buttons.socials.map(({ href, icon }) => (
              <Anchor
                key={href}
                href={href}
                icon={icon}
                variant="socialMedia"
              />
            ))}
          </div>

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
    </Section>
  )
}
