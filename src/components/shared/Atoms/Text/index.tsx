import React from 'react'

import { ComponentBaseProps } from '@/types/global'

const Text: React.FC<ComponentBaseProps> = ({ children, className }) => {
  return <p className={`text-brand-black ${className}`}>{children}</p>
}

export default Text
