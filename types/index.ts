export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Deal {
  id: string;
  location: string;
  duration: number;
  price: number;
  image: string;
  rating: number | null;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  readTime: number;
  tags: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

export interface Commitment {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomePageProps {
  destinations: Destination[];
  deals: Deal[];
  stories: Story[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  statistics: Statistic[];
  commitments: Commitment[];
  heroImages: string[];
  customerAvatars: string;
  whoWeAreImage: string;
}