'use client'

import { Wrapper, Content } from './styles'

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<Wrapper>
			<Content>{children}</Content>
		</Wrapper>
	)
}
