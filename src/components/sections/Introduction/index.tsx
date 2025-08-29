import Container from '@Atoms/Container'
import Icon from '@Atoms/Icon'
import Text from '@Atoms/Text'

import { IntroductionProps } from './types'

export default function Introduction({ content }: IntroductionProps) {
  const { id, cards } = content

  return (
    <Container id={id}>
      <div className="xs:pt-8 xs:pb-8 lg:pt-20 lg:pb-20">
        <ul className="xs:flex-col xs:gap-12 flex w-full items-center justify-between lg:flex-row">
          {cards.map(({ title, icon, content }) => (
            <li className="flex max-w-[180px] flex-col items-center gap-2 text-center">
              {title && (
                <Text className="xs:text-3xl font-bold lg:text-4xl">
                  {title}
                </Text>
              )}
              {icon && <Icon type={icon} size={40} />}

              <Text className="xs:text-base lg:text-lg">{content}</Text>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
