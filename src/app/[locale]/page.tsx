import Header from '@/components/Header'

import content from '../../content'

type HomeParams = {
	params: {
		locale: string
	}
}

export default function Home({ params: { locale } }: HomeParams) {
	const { header } = content()

	return (
		<>
			<Header locale={locale} content={header} />
		</>
	)
}
