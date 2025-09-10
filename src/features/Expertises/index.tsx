import { invertIcons } from '@/assets/getAssets'
import { cn } from '@/lib/utils'

import Container from '@components/Container'
import Text from '@components/Text'

import useAssets from '@assets'

import { ExpertisesProps } from './types'

export default function Expertises({ content }: ExpertisesProps) {
  const { id, title, description, techs } = content

  const { techs: techsAssets } = useAssets()

  return (
    <Container id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] xs:gap-12 flex w-full flex-col lg:max-w-full lg:gap-20 lg:pt-20 lg:pb-20">
          <div className="xs:text-center xs:items-center flex flex-col gap-10 lg:items-start lg:text-left">
            <h1 className="xs:text-4xl text-5xl font-semibold">{title}</h1>

            <Text className="w-full max-w-[640px]">{description}</Text>
          </div>

          <ul className="xs:flex-wrap xs:gap-10 xs:justify-center flex w-full lg:justify-between">
            {techs.map(({ key, alt }) => {
              const inverted = invertIcons[key] && 'invert-0 filter dark:invert'

              return (
                <li
                  key={alt}
                  className="xs:h-8 flex items-center rounded-sm lg:h-10"
                >
                  <img
                    className={cn('h-full', inverted)}
                    src={techsAssets[key]}
                    alt={alt}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}
