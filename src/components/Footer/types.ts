import { IconName } from '@components/Icon'

type FooterAnchor = {
  href: string
  icon: IconName
}

type NavItem = {
  id: string
  label: string
}

export type FooterContent = {
  nav: NavItem[]
  socials: FooterAnchor[]
  copyright: string
}

export type FooterProps = {
  content: FooterContent
}
