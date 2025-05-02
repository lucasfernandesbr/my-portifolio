import { Award, Briefcase, ChevronDown } from 'react-feather'

import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

import { JourneysProps } from './types'

const Journeys: React.FC<JourneysProps> = ({ content }) => {
  const { title, description, professional, academic } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <Text className="text-justify">{description}</Text>
        </div>

        <div id="journeys" className="flex flex-col gap-20">
          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center gap-4">
              <Briefcase />
              <Text className="text-3xl font-semibold">
                {professional.title}
              </Text>
            </div>

            <ul className="flex w-full flex-col">
              {professional.journey.map(
                ({ company_name, description, position }) => (
                  <li className="border-gray-30 flex justify-between border-b pt-10 pb-10 last:border-0">
                    <div className="flex flex-col gap-3">
                      <Text className="text-2xl font-semibold">
                        {company_name}
                      </Text>

                      <div className="flex items-center gap-3">
                        {/* <div className="bg-gray-30 mr-2 h-[8px] w-[8px] rounded-full" /> */}
                        <Text className="text-gray-80 font-medium">
                          {description}
                        </Text>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Text className="text-gray-80 font-semibold">
                        {position}
                      </Text>
                    </div>

                    <div className="flex items-center gap-3">
                      <Text className="text-brand-black font-semibold">
                        Show Details
                      </Text>
                      <ChevronDown />
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center gap-4">
              <Award />
              <Text className="text-3xl font-semibold">{academic.title}</Text>
            </div>

            <ul className="flex w-full flex-col">
              {academic.journey.map(({ college, description, degree }) => (
                <li className="border-gray-30 flex justify-between border-b pt-10 pb-10 last:border-0">
                  <div className="flex flex-col gap-3">
                    <Text className="text-2xl font-semibold">{college}</Text>

                    <div className="flex items-center gap-3">
                      {/* <div className="bg-gray-30 mr-2 h-[8px] w-[8px] rounded-full" /> */}
                      <Text className="text-gray-80 font-medium">
                        {description}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Text className="text-gray-80 font-semibold">{degree}</Text>
                  </div>

                  <div className="flex items-center gap-3">
                    <Text className="text-brand-black font-semibold">
                      Show Details
                    </Text>
                    <ChevronDown />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Journeys
