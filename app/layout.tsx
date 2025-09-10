import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Craig Edwards | Mortgages (MA • NH • ME)',
  description: 'Loan Officer • Family • Fitness • Tech-forward tools',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="max-w-6xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
