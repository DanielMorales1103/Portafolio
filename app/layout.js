import './globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import IntlProviderWrapper from './components/IntlProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Morales',
  description: 'Portafolio Daniel Morales',
};

export default async function RootLayout({ children }) {
  let messages
  try {
    messages = (await import(`../locales/en/common.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <IntlProviderWrapper locale="en" messages={messages}>
          {children}
        </IntlProviderWrapper>
      </body>
    </html>
  )
}
