import Container from '@Atoms/Container'
import Text from '@Atoms/Text'

import { ExpertisesProps } from './types'

const Expertises: React.FC<ExpertisesProps> = ({ content }) => {
  const { id, title, description, techs } = content

  return (
    <Container id={id}>
      <div className="flex w-full flex-col gap-12 pt-[80px] pb-[80px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

          <Text className="text-justify">{description}</Text>
        </div>

        <div className="border-gray-20 border-b" />

        <ul className="flex w-full justify-between">
          {techs.map(({ src, alt }) => (
            <li className="flex h-10 items-center rounded-sm">
              <img className="h-full" src={src} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Expertises
