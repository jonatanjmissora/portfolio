import "../_styles/global.css"
import { ThemeProvider } from "next-themes"
import LenisProvider from "../_components/LenisProvider"
import { Oswald } from 'next/font/google'

export const metadata = {
  title: 'JM Portfolio',
  description: 'App',
}

const oswald = Oswald({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={oswald.className} suppressHydrationWarning>
      <body className="min-h-dvh w-full flex flex-col">
        <ThemeProvider>
          <LenisProvider>

            {children}

          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

