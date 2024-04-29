import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Lucas Fernandes Souza',
	description: 'This is my webpage portifolio',
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	params: { locale: string }
}>) {
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	)
}
