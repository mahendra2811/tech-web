import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import apiService from '@/lib/api';
import axios from 'axios';

// Define the schema for newsletter subscription validation
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body against the schema
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          errors: result.error.format(),
        },
        { status: 400 }
      );
    }

    const { email } = result.data;

    try {
      // Forward the request to the backend API
      const response = await apiService.newsletter.subscribe(email);

      // Return the backend's response
      return NextResponse.json(response.data);
    } catch (apiError) {
      if (axios.isAxiosError(apiError) && apiError.response) {
        // Return the error from the backend
        return NextResponse.json(apiError.response.data, { status: apiError.response.status });
      }

      // If it's a network error or other issue
      throw apiError;
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
