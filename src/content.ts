import { useTranslations } from 'next-intl'

export default function content() {
	const t = useTranslations('home')

	const nav = [
		{
			label: t('header.nav.aboutMe.label'),
			href: t('header.nav.aboutMe.href')
		},
		{
			label: t('header.nav.skills.label'),
			href: t('header.nav.skills.href')
		},
		{
			label: t('header.nav.experiences.label'),
			href: t('header.nav.experiences.href')
		},
		{
			label: t('header.nav.portifolio.label'),
			href: t('header.nav.portifolio.href')
		},
		{
			label: t('header.nav.personalGoals.label'),
			href: t('header.nav.personalGoals.href')
		}
	]

	const countrySwitch = [
		{
			flag: t('header.countrySwitch.us.flag'),
			label: t('header.countrySwitch.us.label'),
			locale: t('header.countrySwitch.us.locale')
		},
		{
			flag: t('header.countrySwitch.br.flag'),
			label: t('header.countrySwitch.br.label'),
			locale: t('header.countrySwitch.br.locale')
		}
	]

	return {
		header: {
			logo: t('header.logo'),
			nav,
			countrySwitch
		},
		presentation: {
			title: t('presentation.title'),
			text: t('presentation.text'),
			tag: {
				content: t('presentation.tag.content')
			}
		}
	}
}
