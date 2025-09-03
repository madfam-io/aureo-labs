import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  source: z.string().optional().default('website'),
  preferences: z.object({
    productUpdates: z.boolean().optional().default(true),
    developersNews: z.boolean().optional().default(false),
    companyNews: z.boolean().optional().default(false),
  }).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = subscribeSchema.parse(body)

    // In a real implementation, you would:
    // 1. Check if email already exists
    // 2. Add to your email service (Resend, Mailchimp, etc.)
    // 3. Send confirmation email
    // 4. Store in database with preferences

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For demo purposes, we'll just log the subscription
    console.log('Newsletter subscription:', validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
        email: validatedData.email,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('Newsletter subscription error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const token = searchParams.get('token')

    if (!email || !token) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email and unsubscribe token are required',
        },
        { status: 400 }
      )
    }

    // In a real implementation, you would:
    // 1. Validate the unsubscribe token
    // 2. Remove from email service
    // 3. Update database

    console.log('Newsletter unsubscribe:', { email, token })

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}