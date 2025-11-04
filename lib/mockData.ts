import type { Destination, Deal, Story, Testimonial, FAQ, Statistic, Commitment } from "@/types";

export const mockDestinations: Destination[] = [
  {
    id: "1" as const,
    name: "Santorini,Greece" as const,
    description: "Santorini, the crown jewel of the Cyclades, is renowned for its dazzling white-washed buildings, cobalt-blue domes and breathtaking sunsets that..." as const,
    image: "/images/destinations/santorini.png" as const
  },
  {
    id: "2" as const,
    name: "Kyoto, Japan" as const,
    description: "Kyoto, the cultural heart of Japan, is a city where ancient traditions and modern life coexist in harmony. Once the imperial capital, Kyoto is home to over..." as const,
    image: "/images/destinations/kyoto.jpg" as const
  },
  {
    id: "3" as const,
    name: "Bora Bora, French Polynesia" as const,
    description: "Santorini, the crown jewel of the Cyclades, is renowned for its dazzling white-washed buildings, cobalt-blue domes and breathtaking sunsets that..." as const,
    image: "/images/destinations/bora-bora.png" as const
  }
];

export const mockDeals: Deal[] = [
  {
    id: "1" as const,
    location: "Santorini Greece" as const,
    duration: 2,
    price: 425,
    image: "https://images.unsplash.com/photo-1519263157703-b1660ce37456?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: null
  },
  // ... existing code ...
  {
    id: "2" as const,
    location: "Rio de Janeiro, Brazil" as const,
    duration: 4,
    price: 1125,
    image: "https://images.unsplash.com/photo-1611223155177-f4640a5e165b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: null
  },
  {
    id: "3" as const,
    location: "Paris, France" as const,
    duration: 2,
    price: 425,
    image: "https://images.unsplash.com/photo-1708392310993-feac72ff1dae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: null
  },
  {
    id: "4" as const,
    location: "Newyork City, USA" as const,
    duration: 2,
    price: 425,
    image: "https://images.unsplash.com/photo-1519263157703-b1660ce37456?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: 4.3
  },
  {
    id: "5" as const,
    location: "Dubai, UAE" as const,
    duration: 2,
    price: 700,
    image: "https://images.unsplash.com/photo-1611223155177-f4640a5e165b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: null
  },
  {
    id: "6" as const,
    location: "Rome, Italy" as const,
    duration: 2,
    price: 425,
    image: "https://images.unsplash.com/photo-1708392310993-feac72ff1dae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: 4.3
  },
  {
    id: "7" as const,
    location: "Cape Town, South Africa" as const,
    duration: 4,
    price: 500,
    image: "https://images.unsplash.com/photo-1519263157703-b1660ce37456?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: 4.3
  },
  {
    id: "8" as const,
    location: "Lagos, Nigeria" as const,
    duration: 2,
    price: 425,
    image: "https://images.unsplash.com/photo-1611223155177-f4640a5e165b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjaXR5JTIwbGFuZG1hcmslMjB0cmF2ZWx8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const,
    rating: 4.3
  }
];

export const mockStories: Story[] = [
  {
    id: "1" as const,
    title: "10 Hidden Gems You Must Visit in Europe" as const,
    excerpt: "Explore the lesser-known wonders of Europe, from quaint villages to breathtaking landscapes...." as const,
    readTime: 10,
    tags: ["Travel Tips" as const, "Europe" as const, "Adventure" as const],
    image: "/images/stories/europe-gems.jpg" as const
  },
  {
    id: "2" as const,
    title: "How to Travel on a Budget:Tips" as const,
    excerpt: "Learn how to save money while traveling without compromising on experiences. Our experts share..." as const,
    readTime: 12,
    tags: ["Travel Tips" as const, "Budget Travel" as const, "Experience" as const],
    image: "https://images.unsplash.com/photo-1507807478564-8ceb5832aaa3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxwZXJzb24lMjBiYWNrcGFjayUyMGxha2UlMjBtb3VudGFpbnN8ZW58MHwwfHx8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const
  },
  {
    id: "3" as const,
    title: "The Ultimate Guide to Solo Travel in Asia" as const,
    excerpt: "Embark on a solo adventure across Asia with our comprehensive guide. From safety tips to must....." as const,
    readTime: 7,
    tags: ["Asia" as const, "Solo-Travel" as const, "Guide" as const],
    image: "https://images.unsplash.com/photo-1525515159172-51a4346b769f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0ZW1wbGUlMjBsYW50ZXJucyUyMGFzaWF8ZW58MHwwfHxyZWR8MTc2MjE2ODk0MHww&ixlib=rb-4.1.0&q=85" as const
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1" as const,
    name: "Yordanos Assefa" as const,
    location: "Tokyo, Japan" as const,
    quote: "\"Exploring Tokyo was a dream come true. The guides were knowledgeable, and the itinerary was perfect.\"" as const,
    avatar: "/images/testimonials/yordanos.png" as const
  },
  {
    id: "2" as const,
    name: "Sibusiso Mkhize" as const,
    location: "Paris, France" as const,
    quote: "\"The trip to Paris was amazing! Everything was well-organized, and the experience was unforgettable.\"" as const,
    avatar: "/images/testimonials/yordanos.png" as const
  },
  {
    id: "3" as const,
    name: "Ibrahim Mahmoud" as const,
    location: "Santorini, Greece" as const,
    quote: "\"Santorini was breathtaking. The service provided by this agency was top-notch, from start to finish.\"" as const,
    avatar: "/images/testimonials/yordanos.png" as const
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: "1" as const,
    question: "What is the best way to book a trip?" as const,
    answer: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me" as const,
    isOpen: false
  },
  // ... existing code ...
  {
    id: "2" as const,
    question: "Do you offer travel insurance?" as const,
    answer: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me" as const,
    isOpen: false
  },
  {
    id: "3" as const,
    question: "What should I do if I need help during my trip?" as const,
    answer: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me" as const,
    isOpen: false
  },
  {
    id: "4" as const,
    question: "Are there any hidden fees?" as const,
    answer: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me" as const,
    isOpen: false
  },
  {
    id: "5" as const,
    question: "Can I cancel or change my booking?" as const,
    answer: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me" as const,
    isOpen: false
  },
  {
    id: "6" as const,
    question: "How can I find the best deals?" as const,
    answer: "Sign up for our newsletter and follow us on social media to stay updated on exclusive offers and discounts. You can also check our \"Deals\" section regularly for the latest promotions." as const,
    isOpen: true
  }
];

export const mockStatistics: Statistic[] = [
  { value: 10000, label: "Happy traveller" as const },
  { value: 3000, label: "Destination worldwide" as const },
  { value: 95, label: "Customer satisfaction rate" as const, suffix: "%" as const }
];

export const mockCommitments: Commitment[] = [
  {
    id: "1" as const,
    icon: "book" as const,
    title: "Easy booking" as const,
    description: "Easily book, manage, and enjoy your trips all in one place." as const
  },
  {
    id: "2" as const,
    icon: "route-square" as const,
    title: "Airport Pickup" as const,
    description: "We provide transport from the airpot to the hotel" as const
  },
  {
    id: "3" as const,
    icon: "call-outgoing" as const,
    title: "Support" as const,
    description: "24/7 customer service to assist you anytime, anywhere." as const
  },
  {
    id: "4" as const,
    icon: "people" as const,
    title: "Best tour guide" as const,
    description: "our tour guide are ready to guide your trip" as const
  }
];