'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export type BackgroundVariant = 'default' | 'gradient' | 'dots' | 'waves' | 'grid' | 'noise';

interface SectionBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
  children?: ReactNode;
  animate?: boolean;
}

/**
 * A component that provides animated backgrounds for sections
 *
 * @param variant The background variant to use
 * @param className Additional classes to apply to the background
 * @param children Optional content to render inside the background
 * @param animate Whether to animate the background (default: true)
 */
export function SectionBackground({
  variant = 'default',
  className,
  children,
  animate = true,
}: SectionBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      {variant === 'default' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 1 } : undefined}
          transition={{ duration: 1 }}
        />
      )}

      {variant === 'gradient' && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={{ duration: 1 }}
          />
          {animate && (
            <>
              <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -40, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </>
          )}
        </>
      )}

      {variant === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      )}

      {variant === 'waves' && (
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            preserveAspectRatio="none"
          >
            <motion.path
              d={
                animate
                  ? 'M0 415L21.5 417.7C43 420.3 86 425.7 128.8 427.3C171.7 429 214.3 427 257.2 423.3C300 419.7 343 414.3 385.8 411.3C428.7 408.3 471.3 407.7 514.2 410.3C557 413 600 419 642.8 421.3C685.7 423.7 728.3 422.3 771.2 419.7C814 417 857 413 878.5 411L900 409L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
                  : 'M0 415L21.5 417.7C43 420.3 86 425.7 128.8 427.3C171.7 429 214.3 427 257.2 423.3C300 419.7 343 414.3 385.8 411.3C428.7 408.3 471.3 407.7 514.2 410.3C557 413 600 419 642.8 421.3C685.7 423.7 728.3 422.3 771.2 419.7C814 417 857 413 878.5 411L900 409L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
              }
              fill="var(--primary)"
              fillOpacity="0.05"
              animate={
                animate
                  ? {
                      d: [
                        'M0 415L21.5 417.7C43 420.3 86 425.7 128.8 427.3C171.7 429 214.3 427 257.2 423.3C300 419.7 343 414.3 385.8 411.3C428.7 408.3 471.3 407.7 514.2 410.3C557 413 600 419 642.8 421.3C685.7 423.7 728.3 422.3 771.2 419.7C814 417 857 413 878.5 411L900 409L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z',
                        'M0 435L21.5 430.7C43 426.3 86 417.7 128.8 417.3C171.7 417 214.3 425 257.2 429.3C300 433.7 343 434.3 385.8 431.3C428.7 428.3 471.3 421.7 514.2 420.3C557 419 600 423 642.8 425.3C685.7 427.7 728.3 428.3 771.2 425.7C814 423 857 417 878.5 414L900 411L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z',
                      ],
                    }
                  : undefined
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.path
              d={
                animate
                  ? 'M0 459L21.5 456.3C43 453.7 86 448.3 128.8 447.7C171.7 447 214.3 451 257.2 453.7C300 456.3 343 457.7 385.8 456.3C428.7 455 471.3 451 514.2 449.7C557 448.3 600 449.7 642.8 452.3C685.7 455 728.3 459 771.2 459.7C814 460.3 857 457.7 878.5 456.3L900 455L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
                  : 'M0 459L21.5 456.3C43 453.7 86 448.3 128.8 447.7C171.7 447 214.3 451 257.2 453.7C300 456.3 343 457.7 385.8 456.3C428.7 455 471.3 451 514.2 449.7C557 448.3 600 449.7 642.8 452.3C685.7 455 728.3 459 771.2 459.7C814 460.3 857 457.7 878.5 456.3L900 455L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
              }
              fill="var(--secondary)"
              fillOpacity="0.05"
              animate={
                animate
                  ? {
                      d: [
                        'M0 459L21.5 456.3C43 453.7 86 448.3 128.8 447.7C171.7 447 214.3 451 257.2 453.7C300 456.3 343 457.7 385.8 456.3C428.7 455 471.3 451 514.2 449.7C557 448.3 600 449.7 642.8 452.3C685.7 455 728.3 459 771.2 459.7C814 460.3 857 457.7 878.5 456.3L900 455L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z',
                        'M0 479L21.5 476.3C43 473.7 86 468.3 128.8 467.7C171.7 467 214.3 471 257.2 473.7C300 476.3 343 477.7 385.8 476.3C428.7 475 471.3 471 514.2 469.7C557 468.3 600 469.7 642.8 472.3C685.7 475 728.3 479 771.2 479.7C814 480.3 857 477.7 878.5 476.3L900 475L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z',
                      ],
                    }
                  : undefined
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              }}
            />
          </svg>
        </div>
      )}

      {variant === 'grid' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#00000005,transparent)]" />
        </div>
      )}

      {variant === 'noise' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </div>
      )}

      {children}
    </div>
  );
}
