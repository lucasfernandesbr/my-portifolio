import { useEffect } from 'react'
import * as motion from 'motion/react-client'

import useAssets from '@stores/useAssets'

import useSectionReveal from '@hooks/useSectionReveal'

import Markdown from '@components/Markdown'
import Section from '@components/Section'

import { AboutMeProps } from './types'

export default function AboutMe({ content }: AboutMeProps) {
  const { ref, revealed } = useSectionReveal()
  const { images, loadImages } = useAssets()

  const { id, img, title, content: about_me } = content

  const shouldShowSection = revealed ? 'show' : 'hidden'

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <Section ref={ref} id={id}>
      <div className="flex flex-1 justify-center">
        <motion.div
          initial="hidden"
          animate={shouldShowSection}
          className="xs:pt-8 xs:pb-8 xs:flex-col xs:gap-12 xs:max-w-[468px] flex w-full items-center justify-between lg:max-w-full lg:flex-row lg:pt-20 lg:pb-20"
        >
          <motion.img
            initial="hidden"
            animate={shouldShowSection}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, ease: 'easeInOut', delay: 0.2 },
              },
            }}
            src={images[img.key]}
            alt={img.alt}
            className="xs:w-full xs:h-[400px] xs:object-[25%_60%] max-w-[524px] rounded-lg object-cover lg:h-[600px] lg:object-[25%_75%]"
          />

          <div className="xs:text-center flex w-full max-w-[600px] flex-col justify-center gap-10 lg:text-left">
            <motion.h1
              initial="hidden"
              animate={shouldShowSection}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: 'easeInOut', delay: 0.4 },
                },
              }}
              className="xs:text-4xl text-5xl font-semibold"
            >
              {title}
            </motion.h1>

            <motion.div
              initial="hidden"
              animate={shouldShowSection}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: 'easeInOut', delay: 0.6 },
                },
              }}
              className="xs:text-center flex flex-col gap-6 text-justify lg:text-left"
            >
              <Markdown content={about_me} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
