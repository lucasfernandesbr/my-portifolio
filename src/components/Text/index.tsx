import { ComponentBaseProps } from '@/types/global'

export default function Text({ children, className }: ComponentBaseProps) {
  return <p className={`${className}`}>{children}</p>
}
