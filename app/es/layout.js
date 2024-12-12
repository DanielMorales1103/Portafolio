import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import IntlProviderWrapper from '../components/IntlProviderWrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Morales',
  description: 'Portafolio Daniel Morales',
};

export default async function RootLayout({ children }) {
  let messages
  try {
    messages = (await import(`../../locales/es/common.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <IntlProviderWrapper locale="es" messages={messages}>
          {children}
        </IntlProviderWrapper>
      </body>
    </html>
  )
}
