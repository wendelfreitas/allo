import { Promotion } from './types';

export const promotions: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Free Delivery Weekend',
    description:
      'Get free delivery on all orders over $25 this weekend. Use code FREEWEEKEND at checkout.',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    badge: 'Limited Time',
    ctaText: 'Order Now',
    backgroundColor: '#FF6B55',
  },
  {
    id: 'promo-2',
    title: 'New Restaurant Bonus',
    description:
      'Try any newly added restaurant and get 20% off your first order. Discover something new!',
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    badge: '20% Off',
    ctaText: 'Explore New',
    backgroundColor: '#1A1A1A',
  },
  {
    id: 'promo-3',
    title: 'Lunch Express Deal',
    description:
      'Order between 11am-2pm and enjoy express delivery in under 20 minutes on select restaurants.',
    imageUrl:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    badge: 'Express',
    ctaText: 'See Restaurants',
    backgroundColor: '#242424',
  },
  {
    id: 'promo-4',
    title: 'Refer a Friend',
    description:
      'Share your referral code with friends. You both get $10 off your next order!',
    imageUrl:
      'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&q=80',
    badge: '$10 Each',
    ctaText: 'Share Now',
    backgroundColor: '#FF6B55',
  },
  {
    id: 'promo-5',
    title: 'Late Night Bites',
    description:
      'Craving something after 10pm? Enjoy special late-night menus with no minimum order.',
    imageUrl:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    badge: 'Night Owl',
    ctaText: 'Browse Menu',
    backgroundColor: '#1A1A1A',
  },
];
