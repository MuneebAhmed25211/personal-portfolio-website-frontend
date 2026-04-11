import { NextResponse } from 'next/server'

const CHATBOT_API_URL = process.env.CHATBOT_API_URL || 'http://localhost:8000'

export async function GET() {
  try {
    await fetch(`${CHATBOT_API_URL}/health`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}