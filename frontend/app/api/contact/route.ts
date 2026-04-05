import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, stage, challenge, preferredContact } = body

    // Validate required fields
    if (!name || !email || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For production, integrate with email service like Resend, SendGrid, or Mailgun
    // This is a placeholder that logs the data
    console.log('[TFSA Contact Form]', {
      name,
      email,
      company,
      stage,
      challenge,
      preferredContact,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Integrate with email service to send to srajesh2006@gmail.com
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'contact@tfsa.com',
    //   to: 'srajesh2006@gmail.com',
    //   subject: `New Strategic Consultation Request from ${name}`,
    //   html: `...email content...`
    // })

    return NextResponse.json(
      { message: 'Message received. We will contact you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
