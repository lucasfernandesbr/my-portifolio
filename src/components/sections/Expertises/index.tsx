import Container from '@/components/shared/Atoms/Container'
import Text from '@/components/shared/Atoms/Text'

import { ExpertisesProps } from './types'

const Expertises: React.FC<ExpertisesProps> = ({ content }) => {
  const { title, description, techs } = content

  return (
    <Container>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <Text className="text-justify">{description}</Text>
        </div>

        <div className="border-gray-30 border-b" />

        <ul className="flex w-full justify-between">
          {techs.map((_) => (
            <li className="bg-brand-black h-10 w-10 rounded-sm" />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Expertises
