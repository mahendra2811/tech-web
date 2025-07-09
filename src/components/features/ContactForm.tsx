'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import apiService from '@/lib/api';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      // Send the form data to our backend API using our API service
      await apiService.contact.send(data);

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Animation variants
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <motion.div custom={0} variants={formItemVariants}>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
          Name
        </label>
        <input
          id="name"
          {...register('name')}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-shadow duration-200"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div custom={1} variants={formItemVariants}>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-shadow duration-200"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div custom={2} variants={formItemVariants}>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
          Subject
        </label>
        <input
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-shadow duration-200"
        />
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.subject.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div custom={3} variants={formItemVariants}>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-shadow duration-200"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-green-100 text-green-800 rounded-md"
          >
            Your message has been sent successfully. We&apos;ll get back to you soon!
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-100 text-red-800 rounded-md"
          >
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        custom={4}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
