import { useState } from 'react'

import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

const Expertises: React.FC = () => {
  const [array] = useState(Array(11).fill(null))

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">
            My Skills & Expertises
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

        <div className="border-gray-30 border-b" />

        <ul className="flex w-full justify-between">
          {array.map((_) => (
            <li className="bg-brand-black h-10 w-10 rounded-sm" />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Expertises
