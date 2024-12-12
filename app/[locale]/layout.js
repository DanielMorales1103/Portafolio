import '../globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import IntlProviderWrapper from './components/IntlProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function RootLayout({ children, params: { locale } }) {
  let messages
  try {
    messages = (await import(`../../locales/${locale}/common.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <IntlProviderWrapper locale={locale} messages={messages}>
          {children}
        </IntlProviderWrapper>
      </body>
    </html>
  )
}
