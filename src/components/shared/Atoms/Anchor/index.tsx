import React, { AnchorHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

import Icon, { IconName } from '@Atoms/Icon'

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  icon?: IconName
  variant?: 'default' | 'socialMedia' | 'button'
}

const anchorVariants = tv({
  base: 'flex items-center justify-center gap-1 cursor-pointer antialiased transition-all duration-200',
  variants: {
    variant: {
      default: 'font-medium text-brand-black hover:text-gray-60',
      socialMedia:
        'bg-gray-20 text-gray-70 hover:text-support-01 h-[40px] w-[40px] rounded-lg',
      button:
        'bg-brand-black text-brand-white h-[40px] p-3 rounded-lg hover:bg-gray-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Anchor: React.FC<IAnchorProps> = ({
  href,
  label,
  icon,
  variant = 'default',
  ...props
}) => {
  return (
    <a href={href} className={anchorVariants({ variant })} {...props}>
      {label}
      {icon && <Icon type={icon} size={20} />}
    </a>
  )
}

export default Anchor
