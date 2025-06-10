"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // In a real application, you would send this data to your API
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitSuccess && (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          Your message has been sent successfully. We&apos;ll get back to you soon!
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}