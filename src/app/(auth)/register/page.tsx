"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsSubmitting(true);
    setError("");

    try {
      // In a real application, you would send this data to your API
      console.log("Register data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to login page or dashboard
      window.location.href = "/login";
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">Create an account</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>

      <div className="mt-8">
        {error && (
          <div className="mb-4 p-4 text-sm text-red-800 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-left mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register("name")}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-left mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-left mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              {...register("password")}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-left mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              {...register("confirmPassword")}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mt-1"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground text-left">
              I agree to the{" "}
              <Link href="/terms" className="font-medium text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-600 text-left">{errors.terms.message}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-background text-sm font-medium hover:bg-muted"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-background text-sm font-medium hover:bg-muted"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}