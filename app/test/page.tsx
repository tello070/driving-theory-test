'use client'

import { useState } from 'react'

export default function TestPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const testConnection = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/test-db')
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to test connection')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">MongoDB Connection Test</h1>
        <button 
          onClick={testConnection}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Connection'}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            Error: {error}
          </div>
        )}

        {result && (
          <div className="mt-4 space-y-2">
            <div className={`p-4 rounded ${
              result.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {result.message}
            </div>

            {result.status === 'success' && (
              <>
                <div className="mt-4">
                  <h2 className="font-bold">Database Details:</h2>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Database: {result.database}</li>
                    <li>Document ID: {result.insertedId}</li>
                    <li>Timestamp: {new Date(result.timestamp).toLocaleString()}</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h2 className="font-bold">Available Collections:</h2>
                  <ul className="list-disc pl-5 mt-2">
                    {result.collections.map((collection: string) => (
                      <li key={collection}>{collection}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
