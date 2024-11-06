import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/lib/auth-context'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J Networks Broadband - High Speed Internet Provider in Sangareddy',
  description: 'Experience lightning-fast internet with J Networks Broadband. Offering high-speed internet plans up to 200 Mbps, unlimited data, and exceptional service in Sangareddy. Plans starting from ₹250/month.',
  keywords: 'J Networks Broadband, Jabbar Communications, internet service provider, broadband, Sangareddy, high speed internet, unlimited data, fiber internet, OTT plans, home internet, Telangana internet provider',
  openGraph: {
    title: 'J Networks Broadband - High Speed Internet Provider in Sangareddy',
    description: 'Experience lightning-fast internet with J Networks Broadband. Reliable internet service in Sangareddy.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'J Networks Broadband Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  authors: [{ name: 'J Networks Broadband' }],
  creator: 'J Networks Broadband',
  publisher: 'J Networks Broadband',
  formatDetection: {
    telephone: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}