'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsSubmitting(true);
    setError('');

    try {
      // In a real application, you would send this data to your API
      console.log('Login data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard or home page
      window.location.href = '/';
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">Sign in to your account</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Or{' '}
        <Link href="/register" className="font-medium text-primary hover:underline">
          create a new account
        </Link>
      </p>

      <div className="mt-8">
        {error && (
          <div className="mb-4 p-4 text-sm text-red-800 bg-red-100 rounded-md">{error}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-left mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none mt-1"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              {...register('rememberMe')}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
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
