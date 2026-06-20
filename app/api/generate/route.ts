import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { subject, topics, examDate } = await request.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: `Create a detailed study plan for:
Subject: ${subject}
Topics: ${topics}
Exam Date: ${examDate}

Please provide a day-by-day study schedule with specific topics to cover each day.`
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    console.log('API Response:', data); 
    
    if (!response.ok || data.error) {
      console.error('API Error:', data);
      return NextResponse.json({ 
        error: data.error?.message || 'Failed to generate plan' 
      }, { status: 500 });
    }

    if (!data.choices || data.choices.length === 0) {
      return NextResponse.json({ 
        error: 'No response from AI' 
      }, { status: 500 });
    }

    const studyPlan = data.choices[0]?.message?.content || 'Failed to generate plan';
    return NextResponse.json({ plan: studyPlan });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate plan' 
    }, { status: 500 });
  }
}
