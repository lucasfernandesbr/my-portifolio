'use client'

import Container from '@/components/Container'

import CountrySwitch from './CountrySwitch'
import HeaderMenu from './Nav'

import { Wrapper } from './styles'
import { HeaderParams } from './types'

export default function Header({ content, locale }: HeaderParams) {
	const { logo, nav, countrySwitch } = content

	return (
		<header>
			<Container>
				<Wrapper>
					<img src="/common/logo.svg" alt="my-portifolio-logo" />
					<HeaderMenu content={nav} />
					<CountrySwitch content={countrySwitch} locale={locale} />
				</Wrapper>
			</Container>
		</header>
	)
}
