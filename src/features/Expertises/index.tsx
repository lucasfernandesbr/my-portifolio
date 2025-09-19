import * as motion from 'motion/react-client'

import { cn } from '@/lib/utils'

import useAssets from '@stores/useAssets'
import { invertIcons } from '@stores/useAssets/getAssets'

import useSectionReveal from '@hooks/useSectionReveal'

import Section from '@components/Section'

import { ExpertisesProps } from './types'

export default function Expertises({ content }: ExpertisesProps) {
  const { ref, revealed } = useSectionReveal()
  const { techs: techsAssets } = useAssets()

  const { id, title, description, techs } = content

  return (
    <Section ref={ref} id={id}>
      <div className="flex flex-1 justify-center">
        <div className="xs:pt-8 xs:pb-8 xs:max-w-[468px] xs:gap-12 flex w-full flex-col lg:max-w-full lg:gap-20 lg:pt-20 lg:pb-20">
          <motion.div
            initial="hidden"
            animate={revealed ? 'show' : 'hidden'}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, ease: 'easeInOut', delay: 0.2 },
              },
            }}
            className="xs:text-center xs:items-center flex flex-col gap-10 lg:items-start lg:text-left"
          >
            <h1 className="xs:text-4xl text-5xl font-semibold">{title}</h1>

            <p className="w-full max-w-[640px]">{description}</p>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate={revealed ? 'show' : 'hidden'}
            variants={{
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="xs:flex-wrap xs:gap-10 xs:justify-center flex w-full lg:justify-between"
          >
            {techs.map(({ key, alt }) => {
              const inverted = invertIcons[key] && 'invert-0 filter dark:invert'

              return (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: 'easeInOut' },
                    },
                  }}
                  key={alt}
                  className="xs:h-8 flex items-center rounded-sm lg:h-10"
                >
                  <img
                    className={cn('h-full', inverted)}
                    src={techsAssets[key]}
                    alt={alt}
                  />
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </Section>
  )
}
