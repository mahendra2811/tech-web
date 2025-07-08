import { Testimonial } from '@/constant/testimonials';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.clientName}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">
              {testimonial.initials}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.clientName}</h3>
          <p className="text-sm text-white/70">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-white/80 italic">&quot;{testimonial.testimonial}&quot;</p>
    </div>
  );
}
