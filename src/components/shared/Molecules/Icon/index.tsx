import * as Icons from 'react-feather'
import { IconProps } from 'react-feather'

export type IconName = keyof typeof Icons

type Props = IconProps & {
  type: IconName
}

const Icon = ({ type, ...props }: Props) => {
  const FeatherIcon = Icons[type]

  return FeatherIcon ? <FeatherIcon {...props} /> : null
}

export default Icon
