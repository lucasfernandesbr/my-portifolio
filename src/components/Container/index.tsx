import React, { HTMLAttributes } from 'react'

import { cn } from '@lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn('flex w-full justify-center', className)} {...props}>
      <div className="w-full max-w-[1224px] pr-5 pl-5">{children}</div>
    </div>
  )
}
