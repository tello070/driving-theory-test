import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined')
    }

    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    
    // Get reference to the database
    const db = client.db('driving_theory')
    
    // Insert a test document
    const testCollection = db.collection('test')
    const result = await testCollection.insertOne({
      message: 'Test connection',
      timestamp: new Date(),
      success: true
    })

    // Get all collections
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map(col => col.name)

    await client.close()

    return NextResponse.json({
      status: 'success',
      message: 'Connected to MongoDB!',
      insertedId: result.insertedId.toString(),
      collections: collectionNames,
      database: 'driving_theory',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}
