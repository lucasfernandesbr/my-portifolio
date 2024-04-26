'use client'

import Container from '../Container'

import HeaderNav from './Nav'

import { Wrapper } from './styles'

export default function Header() {
	return (
		<header>
			<Container>
				<Wrapper>
					<div>Logo</div>
					<HeaderNav />
					<div>Country Switch</div>
				</Wrapper>
			</Container>
		</header>
	)
}
