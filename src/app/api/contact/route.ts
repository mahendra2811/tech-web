import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
    
    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Possibly integrate with a CRM or ticketing system
    
    console.log("Contact form submission:", { name, email, subject, message });
    
    // For now, we'll just simulate a successful submission
    // with a slight delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return NextResponse.json({ 
      success: true, 
      message: "Your message has been received. We'll get back to you soon!" 
    });
    
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