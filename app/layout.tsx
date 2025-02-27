import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Book, Home, Activity, Trophy } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Driving Theory Test',
  description: 'Practice for your driving theory test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex items-center px-2 text-gray-900">
                    <Home className="h-5 w-5" />
                    <span className="ml-2 font-semibold">Theory Test</span>
                  </Link>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link 
                      href="/practice-test"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      <Book className="h-4 w-4 mr-1" />
                      Practice Test
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
