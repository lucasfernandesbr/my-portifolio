import { useEffect } from 'react'

import Text from '@/components/Text'
import useAssets from '@/stores/useAssets'

import { CuriosityCardProps } from './types'

export default function CuriosityCard({
  title,
  description,
  image,
}: CuriosityCardProps) {
  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <div className="flex max-w-[320px] flex-col gap-8">
      <img
        src={images[image.key]}
        alt={image.alt}
        className="bg-brand-black dark:bg-gray-70 h-[216px] rounded-lg object-cover"
      />

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <Text>{description}</Text>
      </div>
    </div>
  )
}
