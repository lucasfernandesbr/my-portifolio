import { forwardRef } from 'react'

import { ISectionProps } from './types'

const Section = forwardRef<HTMLElement, ISectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <section ref={ref} className="flex w-full justify-center" {...props}>
        <div className="w-full max-w-[1224px] pr-5 pl-5">{children}</div>
      </section>
    )
  },
)

Section.displayName = 'Section'

export default Section
