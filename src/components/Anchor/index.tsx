import { AnchorHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

import Icon, { IconName } from '@components/Icon'

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  icon?: IconName
  variant?: 'default' | 'socialMedia' | 'button'
}

const anchorVariants = tv({
  base: 'flex items-center justify-center gap-1 cursor-pointer antialiased transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-support-01 focus-visible:ring-offset-2 rounded-sm',
  variants: {
    variant: {
      default:
        'font-medium hover:text-gray-60 dark:hover:text-gray-40 focus-visible:rounded-sm',
      socialMedia:
        'bg-gray-20 dark:bg-gray-80 text-gray-70 dark:text-gray-40 hover:bg-gray-30 dark:hover:bg-gray-70 hover:text-support-01 dark:hover:text-support-01 h-[40px] w-[40px] rounded-lg focus-visible:rounded-lg',
      button:
        'bg-brand-black dark:bg-support-01 text-brand-white dark:text-brand-white h-[40px] p-3 rounded-lg hover:bg-gray-90 dark:hover:bg-support-03 hover:-translate-y-0.5 active:translate-y-0 focus-visible:rounded-lg',
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
