import { useEffect } from 'react'
import { tv } from 'tailwind-variants'

import Text from '@/components/Text'

import useAssets from '@assets'

import { ProjectCardProps } from './types'

const projectCardContainerVariants = tv({
  base: 'flex justify-between rounded-2xl xs:flex-col xs:gap-7 lg:w-full lg:flex-row',
  variants: {
    variant: {
      inverted: 'lg:flex-row-reverse',
    },
  },
})

export default function ProjectCard({
  title,
  description,
  img,
  variant,
}: ProjectCardProps) {
  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <div className={projectCardContainerVariants({ variant })}>
      <div className="xs:w-full xs:gap-5 xs:max-w-[320px] flex flex-col lg:max-w-none lg:flex-1 lg:basis-1/2 lg:gap-8">
        <h1 className="xs:text-2xl xs:gap-3 font-semibold lg:text-5xl">
          {title}
        </h1>

        <Text>{description}</Text>
      </div>

      <div className="xs:w-full xs:max-w-[320px] xs:h-[216px] lg:h-[368px] lg:w-1/2 lg:max-w-none">
        <img
          src={images[img.key]}
          alt={images[img.alt]}
          className="bg-brand-black dark:bg-gray-70 h-full w-full rounded-lg object-cover object-center"
        />
      </div>
    </div>
  )
}
