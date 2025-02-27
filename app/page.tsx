import Link from 'next/link'
import { BookOpen, BookCheck, Settings, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Practice Your Theory Test
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Prepare for your driving theory test with our comprehensive practice platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          <Link href="/practice-test" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-600">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Practice Test</h3>
              <p className="mt-2 text-gray-600">Take a simulated theory test</p>
            </div>
          </Link>

          <Link href="/study" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-green-600">
                <BookCheck className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Study Mode</h3>
              <p className="mt-2 text-gray-600">Learn at your own pace</p>
            </div>
          </Link>

          <Link href="/progress" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-purple-600">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Progress</h3>
              <p className="mt-2 text-gray-600">Track your improvement</p>
            </div>
          </Link>

          <Link href="/settings" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-gray-600">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Settings</h3>
              <p className="mt-2 text-gray-600">Customize your experience</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
