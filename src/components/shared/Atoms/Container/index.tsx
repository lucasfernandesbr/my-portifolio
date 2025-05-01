import React from 'react'

import { ComponentBaseProps } from '@/types'

const Container: React.FC<ComponentBaseProps> = ({ children, className }) => {
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <div className="w-full max-w-[1224px]">{children}</div>
    </div>
  )
}

export default Container
