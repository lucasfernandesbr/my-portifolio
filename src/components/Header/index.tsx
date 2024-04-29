'use client'

import Container from '../Container'

import HeaderMenu from './Nav'

import { HeaderParams } from './types'

import CountrySwitch from './CountrySwitch'

import { Wrapper } from './styles'

export default function Header({ content, locale }: HeaderParams) {
	const { logo, nav, countrySwitch } = content

	return (
		<header>
			<Container>
				<Wrapper>
					<div>{logo}</div>
					<HeaderMenu content={nav} />
					<CountrySwitch content={countrySwitch} locale={locale} />
				</Wrapper>
			</Container>
		</header>
	)
}
