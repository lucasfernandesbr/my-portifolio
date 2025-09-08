import { tv } from 'tailwind-variants'

import Text from '@/components/Text'

import { ProjectCardProps } from './types'

const projectCardContainerVariants = tv({
  base: 'flex justify-between rounded-2xl xs:flex-col xs:gap-7 lg:w-full lg:flex-row',
  variants: {
    variant: {
      inverted: 'lg:flex-row-reverse',
    },
  },
})

export default function ProjectCard({
  title,
  description,
  variant,
}: ProjectCardProps) {
  return (
    <div className={projectCardContainerVariants({ variant })}>
      <div className="xs:gap-5 xs:xs:max-w-[320px] flex flex-col lg:max-w-none lg:flex-1 lg:gap-8">
        <h1 className="xs:text-2xl xs:gap-3 font-semibold lg:text-5xl">
          {title}
        </h1>

        <Text>{description}</Text>
      </div>

      <div className="xs:w-full xs:max-w-[320px] xs:h-[216px] bg-brand-black dark:bg-gray-70 shrink-0 rounded-lg lg:h-[368px] lg:max-w-none lg:flex-1" />
    </div>
  )
}
