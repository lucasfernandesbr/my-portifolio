import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

import JourneyList from './JourneyList'
import { JourneysProps } from './types'

const Journeys: React.FC<JourneysProps> = ({ content }) => {
  const { id, title, description, professional, academic } = content

  return (
    <Container id={id}>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <Text className="w-full max-w-[640px] text-center">
            {description}
          </Text>
        </div>

        <div id="journeys" className="border-gray-30 flex border-t-1">
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
    </Container>
  )
}

export default Journeys
