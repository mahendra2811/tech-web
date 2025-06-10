import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the schema for newsletter subscription validation
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
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
          errors: result.error.format() 
        }, 
        { status: 400 }
      );
    }
    
    const { email } = result.data;
    
    // In a real application, you would:
    // 1. Check if the email already exists in your subscriber list
    // 2. Add the email to your newsletter service (e.g., Mailchimp, ConvertKit)
    // 3. Possibly send a confirmation email
    
    console.log("Newsletter subscription:", { email });
    
    // For now, we'll just simulate a successful subscription
    // with a slight delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for subscribing to our newsletter!" 
    });
    
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "An error occurred while processing your request. Please try again." 
      }, 
      { status: 500 }
    );
  }
}