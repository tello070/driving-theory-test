'use client'

import { useState, useEffect } from 'react'

interface Question {
  _id: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  category: string
}

export default function PracticeTest() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions')
      const data = await response.json()
      setQuestions(data.questions)
      setLoading(false)
    } catch (err) {
      console.error('Failed to fetch questions:', err)
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  const currentQuestion = questions[currentIndex]

  if (!currentQuestion) {
    return <div>No questions available.</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`w-full p-4 text-left rounded-lg border ${
                selectedAnswer === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="mt-4 p-4 rounded-lg bg-gray-50">
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setShowResult(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check Answer
          </button>
          <button
            onClick={() => {
              setCurrentIndex(i => Math.min(questions.length - 1, i + 1))
              setSelectedAnswer('')
              setShowResult(false)
            }}
            disabled={currentIndex === questions.length - 1}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
