export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  testimonial: string;
  initials: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-johnson',
    clientName: 'Sarah Johnson',
    company: 'TechInnovate Solutions',
    testimonial:
      'The team delivered an exceptional solution that exceeded our expectations. Their expertise, professionalism, and attention to detail made the entire process smooth and enjoyable.',
    initials: 'SJ',
  },
  {
    id: 'michael-chen',
    clientName: 'Michael Chen',
    company: 'Global Retail Group',
    testimonial:
      'Working with this team was a game-changer for our business. They understood our requirements perfectly and delivered a solution that has significantly improved our operational efficiency.',
    initials: 'MC',
  },
  {
    id: 'emily-rodriguez',
    clientName: 'Emily Rodriguez',
    company: 'HealthFirst Partners',
    testimonial:
      'The mobile application they developed for us has received outstanding feedback from our patients. Their technical expertise combined with their understanding of the healthcare industry made all the difference.',
    initials: 'ER',
  },
];