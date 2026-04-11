import { NextRequest, NextResponse } from 'next/server'

// This route proxies to your FastAPI chatbot backend
// Set CHATBOT_API_URL in your Vercel environment variables
const CHATBOT_API_URL = process.env.CHATBOT_API_URL || 'http://localhost:8000'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    // Call your FastAPI backend
    const response = await fetch(`${CHATBOT_API_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      console.error('Chatbot backend error:', response.status)
      return NextResponse.json(
        { reply: "I'm having trouble connecting right now. Please contact Muneeb at muneebahmad25211@gmail.com" },
        { status: 200 } // Return 200 so the frontend shows the fallback message gracefully
      )
    }

    const data = await response.json()
    return NextResponse.json({ reply: data.reply })

  } catch (err) {
    console.error('Chat proxy error:', err)
    return NextResponse.json(
      { reply: "Something went wrong. Please email muneebahmad25211@gmail.com directly!" },
      { status: 200 }
    )
  }
}