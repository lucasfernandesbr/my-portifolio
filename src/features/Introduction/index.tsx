import * as motion from 'motion/react-client'

import useSectionReveal from '@hooks/useSectionReveal'

import Icon from '@components/Icon'
import Section from '@components/Section'

import { IntroductionProps } from './types'

export default function Introduction({ content }: IntroductionProps) {
  const { ref, revealed } = useSectionReveal()

  const { id, cards } = content

  return (
    <Section ref={ref} id={id}>
      <div className="xs:pt-8 xs:pb-8 lg:pt-20 lg:pb-20">
        <motion.ul
          initial="hidden"
          animate={revealed ? 'show' : 'hidden'}
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="xs:flex-col xs:gap-12 flex w-full items-center justify-between lg:flex-row"
        >
          {cards.map(({ title, icon, content }) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: 'easeInOut' },
                },
              }}
              className="flex max-w-[180px] flex-col items-center gap-2 text-center"
            >
              {title && (
                <p className="xs:text-3xl font-bold lg:text-4xl">{title}</p>
              )}
              {icon && <Icon type={icon} size={40} />}

              <p className="xs:text-base lg:text-lg">{content}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
