import { Nav, NavItem, NavList } from './styles'

import { NavContent } from './types'

export default function HeaderMenu({ content }: NavContent) {
	return (
		<Nav>
			<NavList>
				{content.map((item) => (
					<NavItem key={item.label}>{item.label}</NavItem>
				))}
			</NavList>
		</Nav>
	)
}
