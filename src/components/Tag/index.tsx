'use client'

import { Text } from '@/components/Text'

import { Wrapper } from './styles'

import { TagProps } from './types'

export default function Tag({ content }: TagProps) {
	return (
		<Wrapper>
			<Text fontWeight={700}>{content}</Text>
		</Wrapper>
	)
}
