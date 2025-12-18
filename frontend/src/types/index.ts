// Shared TypeScript interfaces for the student marketplace app

export interface Listing {
  id: string | number;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  category: string;
  rating?: number;
  isFavorite?: boolean;
  description?: string;
  seller?: {
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  postedDate?: string;
  views?: number;
}

export interface Filters {
  category: string;
  condition: string;
  priceRange: [number, number];
  location: string;
  searchTerm: string;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  avatar: string;
  rating: number;
  verified: boolean;
  listings: Listing[];
}

export interface CreateListingForm {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  location: string;
  images: File[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}
