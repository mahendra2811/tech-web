import { Testimonial } from '@/constant/testimonials';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No testimonials available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}