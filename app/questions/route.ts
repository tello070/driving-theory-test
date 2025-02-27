import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!
const client = new MongoClient(uri)

export async function GET() {
  try {
    await client.connect()
    const db = client.db('driving_theory')
    const collection = db.collection('questions')

    const questions = await collection.find({}).toArray()

    return NextResponse.json({ questions })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}
