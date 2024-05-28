'use client'

import Container from '@/components/Container'
import { Text, Title } from '@/components/Text'

import SocialMedia from '@/components/SocialMedia'
import Tag from '@/components/Tag'

import { Img, PresentationContent, Wrapper } from './styles'

import { PresentationProps } from './types'

export default function Presentation({ content }: PresentationProps) {
	const { title, text, tag } = content

	return (
		<Container>
			<Wrapper>
				<PresentationContent>
					<Title>{title}</Title>

					<Tag content={tag.content} />

					<Text>{text}</Text>

					<SocialMedia />
				</PresentationContent>

				<Img />
			</Wrapper>
		</Container>
	)
}
