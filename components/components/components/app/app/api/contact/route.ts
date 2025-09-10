import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  console.log('New contact submission:', data)

  // TODO: send an email via Resend/SendGrid/etc.
  // Example (later):
  // await fetch('https://api.resend.com/emails', { ... })

  return NextResponse.json({ ok: true })
}
