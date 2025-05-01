import { useState } from 'react'
import { Award, Briefcase, ChevronDown } from 'react-feather'

import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

const Journeys: React.FC = () => {
  const [professional] = useState(Array(2).fill(null))
  const [academic] = useState(Array(2).fill(null))

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">
            My Journeys
          </h1>

          <Text className="text-justify">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </div>

        <div id="journeys" className="flex flex-col gap-20">
          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center gap-4">
              <Briefcase />
              <Text className="text-3xl font-semibold">Professional</Text>
            </div>

            <ul className="flex w-full flex-col">
              {professional.map((_) => (
                <li className="border-gray-30 flex justify-between border-b pt-10 pb-10 last:border-0">
                  <div className="flex flex-col gap-3">
                    <Text className="text-2xl font-semibold">Wellhub</Text>

                    <div className="flex items-center gap-3">
                      {/* <div className="bg-gray-30 mr-2 h-[8px] w-[8px] rounded-full" /> */}
                      <Text className="text-gray-80 font-medium">
                        São Paulo, SP, Brazil, yyyy - yyyy
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Text className="text-gray-80 font-semibold">
                      Frontend Developer
                    </Text>
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

          <div className="flex w-full flex-col gap-8">
            <div className="flex items-center gap-4">
              <Award />
              <Text className="text-3xl font-semibold">Academic</Text>
            </div>

            <ul className="flex w-full flex-col">
              {academic.map((_) => (
                <li className="border-gray-30 flex justify-between border-b pt-10 pb-10 last:border-0">
                  <div className="flex flex-col gap-3">
                    <Text className="text-2xl font-semibold">Wellhub</Text>

                    <div className="flex items-center gap-3">
                      {/* <div className="bg-gray-30 mr-2 h-[8px] w-[8px] rounded-full" /> */}
                      <Text className="text-gray-80 font-medium">
                        São Paulo, SP, Brazil, yyyy - yyyy
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Text className="text-gray-80 font-semibold">
                      Frontend Developer
                    </Text>
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
