import Header from '@/components/Header'

import Presentation from '@/components/sections/Presentation'
import content from '../../content'

type HomeParams = {
	params: {
		locale: string
	}
}

export default function Home({ params: { locale } }: HomeParams) {
	const { header, presentation } = content()

	return (
		<>
			<Header locale={locale} content={header} />
			<Presentation content={presentation} />
		</>
	)
}
