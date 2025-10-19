import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, script, industry } = await request.json();

    if (!email || !script) {
      return NextResponse.json({ error: 'Email and script are required' }, { status: 400 });
    }

    // Here you would typically:
    // 1. Save the script to your database
    // 2. Send the script library via email
    // 3. Add the lead to your CRM/email list
    
    // For now, we'll just log the data and return success
    console.log('Script save request:', { email, script, industry });

    // TODO: Implement actual script saving and email sending
    // Example: Save to database, then SendGrid to email script library

    return NextResponse.json({ 
      success: true, 
      message: 'Script library sent to your email' 
    });

  } catch (error) {
    console.error('Error saving script:', error);
    return NextResponse.json({ error: 'Failed to save script' }, { status: 500 });
  }
}
