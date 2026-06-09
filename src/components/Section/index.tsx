import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { ISectionProps } from './types'

const spacingClasses = {
  default: 'xs:pt-8 xs:pb-8 lg:pt-20 lg:pb-20',
  tight: 'xs:pt-4 xs:pb-4 lg:pt-10 lg:pb-10',
  none: '',
}

const Section = forwardRef<HTMLElement, ISectionProps>(
  ({ children, spacing, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('flex w-full justify-center', className)}
        {...props}
      >
        <div
          className={cn(
            'w-full max-w-[1224px] pr-5 pl-5',
            spacing && spacingClasses[spacing],
          )}
        >
          {children}
        </div>
      </section>
    )
  },
)

Section.displayName = 'Section'

export default Section
