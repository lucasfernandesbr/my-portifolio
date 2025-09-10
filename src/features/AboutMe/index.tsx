import { useEffect } from 'react'

import useAssets from '@/stores/useAssets'

import Container from '@components/Container'
import Markdown from '@components/Markdown'

import { AboutMeProps } from './types'

export default function AboutMe({ content }: AboutMeProps) {
  const { id, img, title, content: about_me } = content
  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <Container id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:flex-col xs:gap-12 xs:max-w-[468px] flex w-full items-center justify-between pt-20 pb-20 lg:max-w-full lg:flex-row">
          <img
            src={images[img.key]}
            alt={img.alt}
            className="xs:w-full xs:h-[400px] xs:object-[25%_60%] max-w-[524px] rounded-lg object-cover lg:h-[600px] lg:object-[25%_75%]"
          />

          <div className="xs:text-center flex w-full max-w-[600px] flex-col justify-center gap-10 lg:text-left">
            <h1 className="xs:text-4xl text-5xl font-semibold">{title}</h1>

            <div className="xs:text-center flex flex-col gap-6 text-justify lg:text-left">
              <Markdown content={about_me} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
