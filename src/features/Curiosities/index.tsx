import { useEffect } from 'react'

import Container from '@components/Container'
import Text from '@components/Text'

import useAssets from '@assets'

import CuriosityCard from './CuriosityCard'
import { CuriositiesProps } from './types'

export default function Curiosities({ content }: CuriositiesProps) {
  const { images, loadImages } = useAssets()

  const { id, title, description, items } = content

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <Container id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] xs:items-center flex w-full flex-col lg:max-w-full lg:gap-14 lg:pt-20 lg:pb-20">
          <div className="border-gray-30 flex flex-col items-center gap-7">
            <h1 className="xs:text-4xl xs:text-center font-semibold lg:text-left lg:text-5xl">
              {title}
            </h1>

            <Text className="w-full max-w-[640px] text-center">
              {description}
            </Text>
          </div>

          <ul className="xs:flex-col flex justify-between gap-10 lg:flex-row">
            {items.map(({ title, description, image }) => (
              <li key={title}>
                <CuriosityCard
                  title={title}
                  description={description}
                  image={image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
