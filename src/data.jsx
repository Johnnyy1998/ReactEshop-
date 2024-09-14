import { nanoid } from 'nanoid';

export const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/products', text: 'products' },
  { id: nanoid(), href: '/about', text: 'about us' },
  { id: nanoid(), href: '/contact', text: 'contact' },
];

export const categories = [
  { id: nanoid(), title: 'Electronics', href: '#electronics' },
  { id: nanoid(), title: 'Home & Garden', href: '#home-garden' },
  { id: nanoid(), title: 'Fashion', href: '#fashion' },
  { id: nanoid(), title: 'Sports', href: '#sports' },
];

export const products = [
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/3945685/pexels-photo-3945685.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wireless Headphones',
      price: '$99.99',
      description: 'High-quality wireless headphones with noise-cancellation and superior sound clarity.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Smart Watch',
      price: '$149.99',
      description: 'Advanced smart watch with fitness tracking, GPS, and customizable watch faces.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/6855301/pexels-photo-6855301.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Running Shoes',
      price: '$79.99',
      description: 'Lightweight running shoes with breathable material and cushioned sole for long-distance comfort.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'LED Desk Lamp',
      price: '$29.99',
      description: 'Energy-efficient LED desk lamp with adjustable brightness and color temperature settings.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/586688/pexels-photo-586688.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bluetooth Speaker',
      price: '$59.99',
      description: 'Portable Bluetooth speaker with high-quality sound and long battery life.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/3768141/pexels-photo-3768141.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Smartphone Stand',
      price: '$19.99',
      description: 'Adjustable smartphone stand for comfortable viewing and hands-free use.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gaming Mouse',
      price: '$49.99',
      description: 'High-precision gaming mouse with customizable buttons and RGB lighting.',
      quantity: 0, // Initial stock level
    },
    {
      id: nanoid(),
      img: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Air Purifier',
      price: '$129.99',
      description: 'Air purifier with HEPA filter to improve indoor air quality and remove allergens.',
      quantity: 0, // Initial stock level
    },
  ];
