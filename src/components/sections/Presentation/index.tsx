'use client'

import Container from '@/components/Container'
import { Text, Title } from '@/components/Text'

import SocialMedia from '@/components/SocialMedia'
import Tag from '@/components/Tag'

import { Img, PresentationContent, Wrapper } from './styles'

export default function Presentation() {
	return (
		<Container>
			<Wrapper>
				<PresentationContent>
					<Title>Lucas Fernandes Souza</Title>

					<Tag content="Frontend Developer" />

					<Text>
						Knowledge in web development using javascript with React and NextJs
						delivering quality and resilience.
					</Text>

					<SocialMedia />
				</PresentationContent>

				<Img />
			</Wrapper>
		</Container>
	)
}
