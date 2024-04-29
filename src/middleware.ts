import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['en-us', 'pt-br'],

	defaultLocale: 'en-us'
})

export const config = {
	matcher: ['/', '/(en-us|pt-br)/:path*']
}
