import { Heart } from 'react-feather'

import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

const Introduction: React.FC = () => {
  return (
    <Container>
      <div className="pt-20 pb-20">
        <ul className="flex w-full flex-row items-center justify-between">
          <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
            <Text className="text-4xl font-bold">3+</Text>
            <Text className="text-lg">Years of work experience</Text>
          </li>

          <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
            <Text className="text-4xl font-bold">ESL</Text>
            <Text className="text-lg">English as second language</Text>
          </li>

          <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
            <Text className="text-4xl font-bold">Quality</Text>
            <Text className="text-lg">Deliver code with quality</Text>
          </li>

          <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
            <Heart size={40} />
            <Text className="text-lg">Passionate in web development</Text>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Introduction
