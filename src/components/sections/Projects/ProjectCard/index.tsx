import React from 'react'
import { tv } from 'tailwind-variants'

import Text from '@/components/shared/Atoms/Text'

import { ProjectCardProps } from './types'

const projectCardContainerVariants = tv({
  base: 'flex justify-between rounded-2xl',
  variants: {
    variant: {
      withBackground: 'bg-gray-20 p-20',
    },
    inverted: {
      true: 'flex-row-reverse',
    },
  },
})

const projectCardImageVariants = tv({
  base: 'bg-brand-black h-[368px] rounded-lg',
  variants: {
    variant: {
      default: 'w-[572px]',
      withBackground: 'w-[496px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  variant,
  inverted,
}) => {
  return (
    <div className={projectCardContainerVariants({ variant, inverted })}>
      <div className="flex max-w-[496px] flex-col gap-8">
        <h1 className="text-brand-black text-5xl font-semibold">{title}</h1>

        <Text>{description}</Text>
      </div>

      <div className={projectCardImageVariants({ variant })} />
    </div>
  )
}

export default ProjectCard
