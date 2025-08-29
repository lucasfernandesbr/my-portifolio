import { type ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import * as Icons from 'lucide-react'

export type IconName = keyof typeof Icons

type Props = LucideProps & {
  type: IconName
}

export default function Icon({ type, ...props }: Props) {
  const LucideIcon = Icons[type] as ComponentType<LucideProps>

  return LucideIcon ? <LucideIcon {...props} /> : null
}
