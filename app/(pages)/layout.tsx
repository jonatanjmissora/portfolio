import "../_styles/global.css"
import Header from "../_components/Header/Header"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: 'JM Portfolio',
  description: 'App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh w-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col">

            {children}

          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

