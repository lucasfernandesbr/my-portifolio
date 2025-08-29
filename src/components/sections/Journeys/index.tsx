import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

import JourneyList from './JourneyList'
import { JourneysProps } from './types'

export default function Journeys({ content }: JourneysProps) {
  const { id, title, description, professional, academic } = content

  return (
    <Container id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] flex w-full flex-col gap-12 lg:max-w-full lg:pt-20 lg:pb-20">
          <div className="flex flex-col items-center gap-10">
            <h1 className="xs:text-4xl text-brand-black text-5xl font-semibold">
              {title}
            </h1>

            <Text className="w-full max-w-[640px] text-center">
              {description}
            </Text>
          </div>

          <div
            id="journeys"
            className="xs:flex-col border-gray-20 flex border-t-1 lg:flex-row"
          >
            <JourneyList
              icon={professional.icon}
              title={professional.title}
              list={professional.journey}
              button={professional.button}
            />

            <JourneyList
              icon={academic.icon}
              title={academic.title}
              list={academic.journey}
              button={academic.button}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
