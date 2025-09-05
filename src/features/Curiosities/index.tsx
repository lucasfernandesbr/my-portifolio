import { useEffect } from 'react'

import Container from '@components/Container'
import Text from '@components/Text'

import useAssets from '@assets'

export default function Curiosities() {
  const { images, loadImages } = useAssets()

  const hasImages = Object.keys(images).length

  useEffect(() => {
    if (!hasImages) loadImages()
  }, [images, loadImages])

  return (
    <Container>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:gap-10 xs:max-w-[468px] xs:items-center flex w-full flex-col lg:max-w-full lg:gap-14 lg:pt-20 lg:pb-20">
          <div className="border-gray-30 flex flex-col items-center gap-7">
            <h1 className="xs:text-4xl xs:text-center text-brand-black font-semibold lg:text-left lg:text-5xl">
              Curiosities About Myself
            </h1>

            <Text className="w-full max-w-[640px] text-center">
              i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </Text>
          </div>

          <div className="xs:flex-col flex justify-between gap-10 lg:flex-row">
            <div className="flex max-w-[320px] flex-col gap-8">
              <img
                src={images['dance_student']}
                alt="travel"
                className="bg-brand-black h-[216px] rounded-lg object-cover"
              />

              <div className="flex flex-col gap-5">
                <h1 className="text-brand-black text-2xl font-semibold">
                  Dance Student
                </h1>

                <Text>
                  i’m a Front-End Developer with over 3 years of experience,
                  specializing in React and Next.js. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </Text>
              </div>
            </div>

            <div className="flex max-w-[320px] flex-col gap-8">
              <div className="bg-brand-black h-[216px] rounded-lg" />

              <div className="flex flex-col gap-5">
                <h1 className="text-brand-black text-2xl font-semibold">
                  Gamer
                </h1>

                <Text>
                  i’m a Front-End Developer with over 3 years of experience,
                  specializing in React and Next.js. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </Text>
              </div>
            </div>

            <div className="flex max-w-[320px] flex-col gap-8">
              <img
                src={images['travel']}
                alt="travel"
                className="bg-brand-black h-[216px] rounded-lg object-cover"
              />

              <div className="flex flex-col gap-5">
                <h1 className="text-brand-black text-2xl font-semibold">
                  Travel Lover
                </h1>

                <Text>
                  i’m a Front-End Developer with over 3 years of experience,
                  specializing in React and Next.js. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
