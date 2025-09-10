import Container from '@components/Container'
import Icon from '@components/Icon'

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
                <p className="xs:text-3xl font-bold lg:text-4xl">{title}</p>
              )}
              {icon && <Icon type={icon} size={40} />}

              <p className="xs:text-base lg:text-lg">{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
