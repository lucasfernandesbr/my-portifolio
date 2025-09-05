import { IconName } from '@components/Icon'

type HeroButton = {
  label: string
  href: string
  icon?: IconName
}

type HeroAnchor = {
  href: string
  icon: IconName
}

type Avatar = {
  key: string
  alt: string
}

type ReadyOnline = {
  avatar: Avatar
  label: string
}

export type HeroContent = {
  id: string
  ready_online: ReadyOnline
  title: string
  buttons: {
    scroll_down: HeroButton
    socials: HeroAnchor[]
  }
}

export type HeroProps = {
  content: HeroContent
}
