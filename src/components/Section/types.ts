import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ISectionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode
  id?: string
  spacing?: 'default' | 'tight' | 'none'
}
