export type HeaderNav = {
	label: string
	href: string
}

export type HeaderCountrySwitch = {
	flag: string
	label: string
	locale: string
}

export type HeaderContent = {
	logo: string
	nav: HeaderNav[]
	countrySwitch: HeaderCountrySwitch[]
}

export type HeaderParams = {
	content: HeaderContent
	locale: string
}
