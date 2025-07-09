import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import apiService from "@/lib/api";
import axios from "axios";

// Define the schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the request body against the schema
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          errors: result.error.format()
        },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = result.data;
    
    try {
      // Forward the request to the backend API
      const response = await apiService.contact.send({ name, email, subject, message });
      
      // Return the backend's response
      return NextResponse.json(response.data);
    } catch (apiError) {
      if (axios.isAxiosError(apiError) && apiError.response) {
        // Return the error from the backend
        return NextResponse.json(
          apiError.response.data,
          { status: apiError.response.status }
        );
      }
      
      // If it's a network error or other issue
      throw apiError;
    }
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again."
      },
      { status: 500 }
    );
  }
}