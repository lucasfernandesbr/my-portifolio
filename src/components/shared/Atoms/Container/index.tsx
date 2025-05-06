import React, { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex w-full justify-center', className)} {...props}>
      <div className="w-full max-w-[1224px]">{children}</div>
    </div>
  )
}

export default Container
