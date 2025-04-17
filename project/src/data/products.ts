import { Product } from '../types/product';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 199.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'Smart Watch Series 5',
    price: 299.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    description: 'Advanced smartwatch with health tracking, GPS, and cellular connectivity.',
    category: 'Electronics'
  },
  // Men's Clothing
  {
    id: '7',
    title: 'Classic White Oxford Shirt',
    price: 49.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=500',
    description: 'Premium cotton oxford shirt perfect for any occasion.',
    category: 'Men'
  },
  {
    id: '8',
    title: 'Slim Fit Navy Blazer',
    price: 129.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=500',
    description: 'Modern slim fit blazer in classic navy.',
    category: 'Men'
  },
  // Women's Clothing
  {
    id: '9',
    title: 'Floral Summer Dress',
    price: 79.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    description: 'Light and breezy floral print dress perfect for summer.',
    category: 'Women'
  },
  {
    id: '10',
    title: 'Designer Leather Handbag',
    price: 199.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
    description: 'Luxury leather handbag with gold hardware.',
    category: 'Women'
  }
];