import { Testimonial } from '@/constant/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-background p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.clientName} 
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
              {testimonial.initials}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{testimonial.clientName}</h3>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">
        &quot;{testimonial.testimonial}&quot;
      </p>
    </div>
  );
}
