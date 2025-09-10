import { AnchorHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

import Icon, { IconName } from '@components/Icon'

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  icon?: IconName
  variant?: 'default' | 'socialMedia' | 'button'
}

const anchorVariants = tv({
  base: 'flex items-center justify-center gap-1 cursor-pointer antialiased transition-all duration-200',
  variants: {
    variant: {
      default: 'font-medium hover:text-gray-60',
      socialMedia:
        'bg-gray-20 text-gray-70 hover:text-support-01 h-[40px] w-[40px] rounded-lg',
      button:
        'bg-brand-black dark:bg-support-01 text-brand-white dark:text-brand-white h-[40px] p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-support-03',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export default function Anchor({
  href,
  label,
  icon,
  variant = 'default',
  ...props
}: IAnchorProps) {
  return (
    <a href={href} className={anchorVariants({ variant })} {...props}>
      {label}
      {icon && <Icon type={icon} size={20} />}
    </a>
  )
}
