import Container from '@Atoms/Container'
import Icon from '@Atoms/Icon'
import Text from '@Atoms/Text'

import { IntroductionProps } from './types'

const Introduction: React.FC<IntroductionProps> = ({ content }) => {
  const { cards } = content

  return (
    <Container>
      <div className="pt-20 pb-20">
        <ul className="flex w-full flex-row items-center justify-between">
          {cards.map(({ title, icon, content }) => (
            <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
              {title && <Text className="text-4xl font-bold">{title}</Text>}
              {icon && <Icon type={icon} size={40} />}

              <Text className="text-lg">{content}</Text>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Introduction
