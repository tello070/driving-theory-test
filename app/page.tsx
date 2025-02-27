import Link from 'next/link'
import { Book, Activity, Trophy, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Driving Theory Test</h1>
        </div>
      </header>

      {/* Main Content */}
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
          {/* Practice Test Card */}
          <Link href="/practice-test" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Practice Test</h3>
              <p className="mt-2 text-gray-600">Take a simulated theory test with random questions</p>
            </div>
          </Link>

          {/* Categories Card */}
          <Link href="/categories" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Categories</h3>
              <p className="mt-2 text-gray-600">Practice questions by specific topics</p>
            </div>
          </Link>

          {/* Progress Card */}
          <Link href="/progress" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Progress</h3>
              <p className="mt-2 text-gray-600">Track your learning progress</p>
            </div>
          </Link>

          {/* Quick Test Card */}
          <Link href="/quick-test" className="group">
            <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex p-3 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Quick Test</h3>
              <p className="mt-2 text-gray-600">Take a short 10-question test</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
