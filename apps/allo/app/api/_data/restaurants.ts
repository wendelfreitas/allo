import { Restaurant, MenuCategory, MenuItem } from './types';

export const restaurants: Restaurant[] = [
  {
    id: 'r1',
    slug: 'bella-napoli',
    name: 'Bella Napoli',
    description:
      'Authentic Neapolitan pizza baked in a wood-fired oven. Family recipes passed down through generations.',
    cuisineType: ['pizza', 'italian'],
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1579751626657-72bc17010834?w=1200&q=80',
    rating: 4.8,
    reviewCount: 342,
    deliveryTime: '25-35 min',
    deliveryFee: 299,
    minimumOrder: 1500,
    isOpen: true,
    isFeatured: true,
    tags: ['Wood-Fired', 'Family Recipes', 'Organic'],
    address: '123 Little Italy St',
  },
  {
    id: 'r2',
    slug: 'tokyo-ramen-house',
    name: 'Tokyo Ramen House',
    description:
      'Rich, soul-warming ramen made with 48-hour bone broth. Authentic Japanese flavors in every bowl.',
    cuisineType: ['japanese', 'sushi'],
    imageUrl:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1200&q=80',
    rating: 4.7,
    reviewCount: 256,
    deliveryTime: '30-40 min',
    deliveryFee: 399,
    minimumOrder: 2000,
    isOpen: true,
    isFeatured: true,
    tags: ['Authentic', 'Bone Broth', 'Award-Winning'],
    address: '456 Sakura Ave',
  },
  {
    id: 'r3',
    slug: 'smash-burger-co',
    name: 'Smash Burger Co.',
    description:
      'Premium smashed burgers with crispy edges and juicy centers. Craft sodas and loaded fries.',
    cuisineType: ['burgers'],
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80',
    rating: 4.6,
    reviewCount: 189,
    deliveryTime: '20-30 min',
    deliveryFee: 199,
    minimumOrder: 1200,
    isOpen: true,
    isFeatured: true,
    tags: ['Smash Style', 'Craft Sodas', 'Loaded Fries'],
    address: '789 Grill Blvd',
  },
  {
    id: 'r4',
    slug: 'spice-route',
    name: 'Spice Route',
    description:
      'A culinary journey through India. From creamy butter chicken to fiery vindaloo, every dish tells a story.',
    cuisineType: ['indian'],
    imageUrl:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    rating: 4.9,
    reviewCount: 421,
    deliveryTime: '35-45 min',
    deliveryFee: 349,
    minimumOrder: 1800,
    isOpen: true,
    isFeatured: true,
    tags: ['Authentic Spices', 'Tandoor Oven', 'Vegan Options'],
    address: '321 Curry Lane',
  },
  {
    id: 'r5',
    slug: 'el-taquero',
    name: 'El Taquero',
    description:
      'Street-style Mexican tacos, burritos, and quesadillas. Made with hand-pressed tortillas daily.',
    cuisineType: ['mexican'],
    imageUrl:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1200&q=80',
    rating: 4.5,
    reviewCount: 167,
    deliveryTime: '20-30 min',
    deliveryFee: 249,
    minimumOrder: 1000,
    isOpen: true,
    isFeatured: false,
    tags: ['Street Style', 'Fresh Tortillas', 'Salsa Bar'],
    address: '555 Fiesta Ave',
  },
  {
    id: 'r6',
    slug: 'dragon-palace',
    name: 'Dragon Palace',
    description:
      'Traditional Chinese cuisine with a modern twist. Handmade dim sum and wok-tossed specialties.',
    cuisineType: ['chinese'],
    imageUrl:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80',
    rating: 4.4,
    reviewCount: 198,
    deliveryTime: '30-40 min',
    deliveryFee: 299,
    minimumOrder: 1500,
    isOpen: true,
    isFeatured: false,
    tags: ['Dim Sum', 'Wok Specialties', 'Family Style'],
    address: '888 Dragon Way',
  },
  {
    id: 'r7',
    slug: 'green-bowl',
    name: 'Green Bowl',
    description:
      'Healthy, vibrant bowls packed with superfoods. Vegan, keto, and paleo options available.',
    cuisineType: ['healthy'],
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80',
    rating: 4.6,
    reviewCount: 134,
    deliveryTime: '15-25 min',
    deliveryFee: 199,
    minimumOrder: 1200,
    isOpen: true,
    isFeatured: true,
    tags: ['Superfoods', 'Vegan Friendly', 'Low Carb'],
    address: '42 Wellness Rd',
  },
  {
    id: 'r8',
    slug: 'smokehouse-bbq',
    name: 'Smokehouse BBQ',
    description:
      'Low and slow smoked meats, tangy sauces, and classic Southern sides. 12-hour smoked brisket.',
    cuisineType: ['bbq'],
    imageUrl:
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
    rating: 4.7,
    reviewCount: 223,
    deliveryTime: '35-50 min',
    deliveryFee: 399,
    minimumOrder: 2000,
    isOpen: true,
    isFeatured: false,
    tags: ['12hr Smoked', 'Southern Style', 'Craft Sauces'],
    address: '777 Hickory Smoke Dr',
  },
  {
    id: 'r9',
    slug: 'thai-orchid',
    name: 'Thai Orchid',
    description:
      'Aromatic Thai dishes with fresh herbs and bold flavors. From Pad Thai to green curry perfection.',
    cuisineType: ['thai'],
    imageUrl:
      'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200&q=80',
    rating: 4.5,
    reviewCount: 176,
    deliveryTime: '25-35 min',
    deliveryFee: 299,
    minimumOrder: 1500,
    isOpen: true,
    isFeatured: false,
    tags: ['Fresh Herbs', 'Spicy Options', 'Curry Masters'],
    address: '99 Orchid Lane',
  },
  {
    id: 'r10',
    slug: 'sweet-surrender',
    name: 'Sweet Surrender',
    description:
      'Artisan desserts, pastries, and cakes. From French macarons to New York cheesecake.',
    cuisineType: ['desserts'],
    imageUrl:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&q=80',
    rating: 4.8,
    reviewCount: 298,
    deliveryTime: '20-30 min',
    deliveryFee: 349,
    minimumOrder: 800,
    isOpen: true,
    isFeatured: true,
    tags: ['Artisan', 'French Pastries', 'Custom Cakes'],
    address: '15 Patisserie Pl',
  },
  {
    id: 'r11',
    slug: 'ocean-catch',
    name: 'Ocean Catch',
    description:
      'Fresh seafood delivered to your door. Lobster rolls, fish tacos, and poke bowls made to order.',
    cuisineType: ['seafood'],
    imageUrl:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    rating: 4.6,
    reviewCount: 145,
    deliveryTime: '25-40 min',
    deliveryFee: 449,
    minimumOrder: 2000,
    isOpen: true,
    isFeatured: false,
    tags: ['Fresh Daily', 'Sustainable', 'Poke Bowls'],
    address: '200 Harbor View',
  },
  {
    id: 'r12',
    slug: 'pizza-planet',
    name: 'Pizza Planet',
    description:
      'New York style thin-crust pizza by the slice or whole pie. Creative toppings and classic combos.',
    cuisineType: ['pizza'],
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1200&q=80',
    rating: 4.3,
    reviewCount: 312,
    deliveryTime: '20-30 min',
    deliveryFee: 199,
    minimumOrder: 1000,
    isOpen: true,
    isFeatured: false,
    tags: ['NY Style', 'By the Slice', 'Late Night'],
    address: '1 Galaxy Way',
  },
  {
    id: 'r13',
    slug: 'sushi-master',
    name: 'Sushi Master',
    description:
      'Premium sushi and sashimi prepared by experienced itamae. Omakase sets and specialty rolls.',
    cuisineType: ['sushi', 'japanese'],
    imageUrl:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=80',
    rating: 4.9,
    reviewCount: 267,
    deliveryTime: '30-45 min',
    deliveryFee: 499,
    minimumOrder: 2500,
    isOpen: true,
    isFeatured: true,
    tags: ['Premium', 'Omakase', 'Fresh Fish Daily'],
    address: '50 Zen Garden St',
  },
  {
    id: 'r14',
    slug: 'burger-barn',
    name: 'Burger Barn',
    description:
      'Classic American burgers, shakes, and onion rings. Grass-fed beef and homemade buns.',
    cuisineType: ['burgers'],
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
    rating: 4.4,
    reviewCount: 201,
    deliveryTime: '20-30 min',
    deliveryFee: 249,
    minimumOrder: 1200,
    isOpen: false,
    isFeatured: false,
    tags: ['Grass-Fed', 'Milkshakes', 'Classic'],
    address: '333 Ranch Rd',
  },
  {
    id: 'r15',
    slug: 'pasta-la-vista',
    name: 'Pasta La Vista',
    description:
      'Handmade pasta crafted daily. Rich sauces, fresh ingredients, and the taste of true Italian tradition.',
    cuisineType: ['italian'],
    imageUrl:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80',
    rating: 4.7,
    reviewCount: 184,
    deliveryTime: '30-40 min',
    deliveryFee: 349,
    minimumOrder: 1800,
    isOpen: true,
    isFeatured: false,
    tags: ['Handmade Pasta', 'Fresh Daily', 'Wine Pairing'],
    address: '700 Tuscany Blvd',
  },
  {
    id: 'r16',
    slug: 'wok-this-way',
    name: 'Wok This Way',
    description:
      'Fast-fired wok dishes with explosive flavors. Szechuan, Cantonese, and fusion specialties.',
    cuisineType: ['chinese'],
    imageUrl:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1200&q=80',
    rating: 4.3,
    reviewCount: 156,
    deliveryTime: '20-30 min',
    deliveryFee: 249,
    minimumOrder: 1200,
    isOpen: true,
    isFeatured: false,
    tags: ['Wok-Fired', 'Szechuan', 'Quick Delivery'],
    address: '168 Dragon St',
  },
];

export const menuCategories: Record<string, MenuCategory[]> = {
  r1: [
    { id: 'mc1', name: 'Classic Pizzas', sortOrder: 1 },
    { id: 'mc2', name: 'Specialty Pizzas', sortOrder: 2 },
    { id: 'mc3', name: 'Sides & Appetizers', sortOrder: 3 },
    { id: 'mc4', name: 'Drinks', sortOrder: 4 },
  ],
  r2: [
    { id: 'mc5', name: 'Ramen', sortOrder: 1 },
    { id: 'mc6', name: 'Appetizers', sortOrder: 2 },
    { id: 'mc7', name: 'Sushi Rolls', sortOrder: 3 },
    { id: 'mc8', name: 'Drinks', sortOrder: 4 },
  ],
  r3: [
    { id: 'mc9', name: 'Burgers', sortOrder: 1 },
    { id: 'mc10', name: 'Sides', sortOrder: 2 },
    { id: 'mc11', name: 'Shakes & Drinks', sortOrder: 3 },
  ],
  r4: [
    { id: 'mc12', name: 'Starters', sortOrder: 1 },
    { id: 'mc13', name: 'Curries', sortOrder: 2 },
    { id: 'mc14', name: 'Tandoor & Grill', sortOrder: 3 },
    { id: 'mc15', name: 'Rice & Bread', sortOrder: 4 },
    { id: 'mc16', name: 'Desserts', sortOrder: 5 },
  ],
  r5: [
    { id: 'mc17', name: 'Tacos', sortOrder: 1 },
    { id: 'mc18', name: 'Burritos & Bowls', sortOrder: 2 },
    { id: 'mc19', name: 'Sides & Extras', sortOrder: 3 },
  ],
  r7: [
    { id: 'mc20', name: 'Signature Bowls', sortOrder: 1 },
    { id: 'mc21', name: 'Build Your Own', sortOrder: 2 },
    { id: 'mc22', name: 'Smoothies', sortOrder: 3 },
  ],
  r10: [
    { id: 'mc23', name: 'Cakes & Pies', sortOrder: 1 },
    { id: 'mc24', name: 'Pastries', sortOrder: 2 },
    { id: 'mc25', name: 'Ice Cream', sortOrder: 3 },
  ],
  r13: [
    { id: 'mc26', name: 'Nigiri & Sashimi', sortOrder: 1 },
    { id: 'mc27', name: 'Specialty Rolls', sortOrder: 2 },
    { id: 'mc28', name: 'Appetizers', sortOrder: 3 },
    { id: 'mc29', name: 'Sets & Platters', sortOrder: 4 },
  ],
};

const defaultCategories: MenuCategory[] = [
  { id: 'def1', name: 'Popular Items', sortOrder: 1 },
  { id: 'def2', name: 'Main Courses', sortOrder: 2 },
  { id: 'def3', name: 'Sides', sortOrder: 3 },
  { id: 'def4', name: 'Drinks', sortOrder: 4 },
];

export function getMenuCategories(restaurantId: string): MenuCategory[] {
  return menuCategories[restaurantId] || defaultCategories;
}

export const menuItems: MenuItem[] = [
  {
    id: 'mi1',
    restaurantId: 'r1',
    categoryId: 'mc1',
    categoryName: 'Classic Pizzas',
    name: 'Margherita',
    description:
      'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi2',
    restaurantId: 'r1',
    categoryId: 'mc1',
    categoryName: 'Classic Pizzas',
    name: 'Pepperoni',
    description:
      'Classic pepperoni with mozzarella and our signature tomato sauce',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi3',
    restaurantId: 'r1',
    categoryId: 'mc1',
    categoryName: 'Classic Pizzas',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, parmesan, and fontina cheese blend',
    price: 1899,
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi4',
    restaurantId: 'r1',
    categoryId: 'mc2',
    categoryName: 'Specialty Pizzas',
    name: 'Truffle Mushroom',
    description:
      'Wild mushroom medley with truffle oil, mozzarella, and fresh thyme',
    price: 2199,
    imageUrl:
      'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian', "Chef's Special"],
  },
  {
    id: 'mi5',
    restaurantId: 'r1',
    categoryId: 'mc2',
    categoryName: 'Specialty Pizzas',
    name: 'Prosciutto e Rucola',
    description:
      'Prosciutto di Parma, arugula, shaved parmesan, balsamic glaze',
    price: 2099,
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi6',
    restaurantId: 'r1',
    categoryId: 'mc3',
    categoryName: 'Sides & Appetizers',
    name: 'Garlic Bread',
    description: 'Toasted ciabatta with garlic butter and herbs',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi7',
    restaurantId: 'r1',
    categoryId: 'mc3',
    categoryName: 'Sides & Appetizers',
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomatoes, basil, and garlic',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi8',
    restaurantId: 'r1',
    categoryId: 'mc4',
    categoryName: 'Drinks',
    name: 'Italian Soda',
    description: 'Sparkling water with your choice of fruit syrup',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&q=80',
    isPopular: false,
    tags: [],
  },

  {
    id: 'mi9',
    restaurantId: 'r2',
    categoryId: 'mc5',
    categoryName: 'Ramen',
    name: 'Tonkotsu Ramen',
    description:
      '48-hour pork bone broth, chashu pork, soft egg, bamboo shoots, nori',
    price: 1799,
    imageUrl:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi10',
    restaurantId: 'r2',
    categoryId: 'mc5',
    categoryName: 'Ramen',
    name: 'Miso Ramen',
    description: 'Rich miso broth, ground pork, corn, butter, bean sprouts',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi11',
    restaurantId: 'r2',
    categoryId: 'mc5',
    categoryName: 'Ramen',
    name: 'Spicy Tantanmen',
    description: 'Sesame-based broth with chili oil, ground pork, bok choy',
    price: 1899,
    imageUrl:
      'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },
  {
    id: 'mi12',
    restaurantId: 'r2',
    categoryId: 'mc6',
    categoryName: 'Appetizers',
    name: 'Gyoza (6pc)',
    description: 'Pan-fried pork and vegetable dumplings with ponzu sauce',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi13',
    restaurantId: 'r2',
    categoryId: 'mc6',
    categoryName: 'Appetizers',
    name: 'Edamame',
    description: 'Steamed soybeans with sea salt',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=400&q=80',
    isPopular: false,
    tags: ['Vegan'],
  },
  {
    id: 'mi14',
    restaurantId: 'r2',
    categoryId: 'mc7',
    categoryName: 'Sushi Rolls',
    name: 'Dragon Roll',
    description: 'Shrimp tempura, avocado, eel, cucumber with unagi sauce',
    price: 1599,
    imageUrl:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi15',
    restaurantId: 'r2',
    categoryId: 'mc7',
    categoryName: 'Sushi Rolls',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber, sesame seeds',
    price: 1399,
    imageUrl:
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },

  {
    id: 'mi16',
    restaurantId: 'r3',
    categoryId: 'mc9',
    categoryName: 'Burgers',
    name: 'Classic Smash',
    description:
      'Double smashed patty, American cheese, pickles, onions, special sauce',
    price: 1399,
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi17',
    restaurantId: 'r3',
    categoryId: 'mc9',
    categoryName: 'Burgers',
    name: 'Bacon BBQ Smash',
    description:
      'Smashed patty, crispy bacon, cheddar, BBQ sauce, crispy onions',
    price: 1599,
    imageUrl:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi18',
    restaurantId: 'r3',
    categoryId: 'mc9',
    categoryName: 'Burgers',
    name: 'Mushroom Swiss Smash',
    description:
      'Smashed patty, sautéed mushrooms, Swiss cheese, truffle aioli',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi19',
    restaurantId: 'r3',
    categoryId: 'mc10',
    categoryName: 'Sides',
    name: 'Loaded Fries',
    description:
      'Crispy fries topped with cheese sauce, bacon bits, and green onions',
    price: 799,
    imageUrl:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi20',
    restaurantId: 'r3',
    categoryId: 'mc10',
    categoryName: 'Sides',
    name: 'Onion Rings',
    description: 'Beer-battered onion rings with ranch dipping sauce',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi21',
    restaurantId: 'r3',
    categoryId: 'mc11',
    categoryName: 'Shakes & Drinks',
    name: 'Chocolate Shake',
    description: 'Thick and creamy chocolate milkshake with whipped cream',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
    isPopular: false,
    tags: [],
  },

  {
    id: 'mi22',
    restaurantId: 'r4',
    categoryId: 'mc12',
    categoryName: 'Starters',
    name: 'Samosa (2pc)',
    description:
      'Crispy pastry filled with spiced potatoes and peas, mint chutney',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi23',
    restaurantId: 'r4',
    categoryId: 'mc12',
    categoryName: 'Starters',
    name: 'Chicken Tikka',
    description:
      'Marinated chicken pieces grilled in tandoor, served with raita',
    price: 999,
    imageUrl:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi24',
    restaurantId: 'r4',
    categoryId: 'mc13',
    categoryName: 'Curries',
    name: 'Butter Chicken',
    description:
      'Tender chicken in rich, creamy tomato-butter sauce with fenugreek',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi25',
    restaurantId: 'r4',
    categoryId: 'mc13',
    categoryName: 'Curries',
    name: 'Lamb Vindaloo',
    description:
      'Fiery Goan curry with tender lamb, potatoes, and aromatic spices',
    price: 1899,
    imageUrl:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },
  {
    id: 'mi26',
    restaurantId: 'r4',
    categoryId: 'mc13',
    categoryName: 'Curries',
    name: 'Palak Paneer',
    description: 'Fresh spinach curry with homemade paneer cheese cubes',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi27',
    restaurantId: 'r4',
    categoryId: 'mc14',
    categoryName: 'Tandoor & Grill',
    name: 'Tandoori Mixed Grill',
    description: 'Assorted tandoor-grilled meats with naan and chutneys',
    price: 2299,
    imageUrl:
      'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400&q=80',
    isPopular: true,
    tags: ["Chef's Special"],
  },
  {
    id: 'mi28',
    restaurantId: 'r4',
    categoryId: 'mc15',
    categoryName: 'Rice & Bread',
    name: 'Garlic Naan',
    description: 'Soft flatbread with garlic and butter, baked in tandoor',
    price: 399,
    imageUrl:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi29',
    restaurantId: 'r4',
    categoryId: 'mc15',
    categoryName: 'Rice & Bread',
    name: 'Biryani Rice',
    description: 'Fragrant basmati rice with saffron and whole spices',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi30',
    restaurantId: 'r4',
    categoryId: 'mc16',
    categoryName: 'Desserts',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk dumplings soaked in rose-cardamom syrup',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1666190094762-2e43e2a6cb57?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },

  {
    id: 'mi31',
    restaurantId: 'r5',
    categoryId: 'mc17',
    categoryName: 'Tacos',
    name: 'Carne Asada Taco',
    description:
      'Grilled steak, cilantro, onions, salsa verde on corn tortilla',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi32',
    restaurantId: 'r5',
    categoryId: 'mc17',
    categoryName: 'Tacos',
    name: 'Al Pastor Taco',
    description: 'Marinated pork, pineapple, cilantro, onions on corn tortilla',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi33',
    restaurantId: 'r5',
    categoryId: 'mc17',
    categoryName: 'Tacos',
    name: 'Fish Taco',
    description: 'Beer-battered cod, cabbage slaw, chipotle crema, lime',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1512838243594-988e31aa5874?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi34',
    restaurantId: 'r5',
    categoryId: 'mc18',
    categoryName: 'Burritos & Bowls',
    name: 'Loaded Burrito',
    description:
      'Choice of protein, rice, beans, cheese, pico, sour cream, guacamole',
    price: 1199,
    imageUrl:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi35',
    restaurantId: 'r5',
    categoryId: 'mc18',
    categoryName: 'Burritos & Bowls',
    name: 'Burrito Bowl',
    description: 'All the burrito goodness without the tortilla, extra fresh',
    price: 1099,
    imageUrl:
      'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi36',
    restaurantId: 'r5',
    categoryId: 'mc19',
    categoryName: 'Sides & Extras',
    name: 'Chips & Guac',
    description: 'Fresh tortilla chips with housemade guacamole',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },

  {
    id: 'mi37',
    restaurantId: 'r7',
    categoryId: 'mc20',
    categoryName: 'Signature Bowls',
    name: 'Acai Power Bowl',
    description: 'Acai blend, granola, banana, berries, coconut, honey drizzle',
    price: 1399,
    imageUrl:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80',
    isPopular: true,
    tags: ['Vegan'],
  },
  {
    id: 'mi38',
    restaurantId: 'r7',
    categoryId: 'mc20',
    categoryName: 'Signature Bowls',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted veggies, chickpeas, avocado, tahini dressing',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
    isPopular: true,
    tags: ['Vegan', 'Best Seller'],
  },
  {
    id: 'mi39',
    restaurantId: 'r7',
    categoryId: 'mc20',
    categoryName: 'Signature Bowls',
    name: 'Protein Power Bowl',
    description:
      'Grilled chicken, brown rice, kale, sweet potato, peanut sauce',
    price: 1599,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    isPopular: false,
    tags: ['High Protein'],
  },
  {
    id: 'mi40',
    restaurantId: 'r7',
    categoryId: 'mc21',
    categoryName: 'Build Your Own',
    name: 'Custom Bowl (Base)',
    description:
      'Choose your base: quinoa, brown rice, mixed greens, or cauliflower rice',
    price: 1199,
    imageUrl:
      'https://images.unsplash.com/photo-1543339308-d595c3a6e2d1?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi41',
    restaurantId: 'r7',
    categoryId: 'mc22',
    categoryName: 'Smoothies',
    name: 'Green Goddess Smoothie',
    description: 'Spinach, banana, mango, coconut water, chia seeds',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80',
    isPopular: true,
    tags: ['Vegan'],
  },

  {
    id: 'mi42',
    restaurantId: 'r10',
    categoryId: 'mc23',
    categoryName: 'Cakes & Pies',
    name: 'NY Cheesecake',
    description: 'Classic New York-style cheesecake with graham cracker crust',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi43',
    restaurantId: 'r10',
    categoryId: 'mc23',
    categoryName: 'Cakes & Pies',
    name: 'Chocolate Lava Cake',
    description:
      'Warm dark chocolate cake with molten center, vanilla ice cream',
    price: 1099,
    imageUrl:
      'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi44',
    restaurantId: 'r10',
    categoryId: 'mc24',
    categoryName: 'Pastries',
    name: 'French Macarons (6pc)',
    description:
      'Assorted flavors: pistachio, rose, lavender, chocolate, vanilla, raspberry',
    price: 1299,
    imageUrl:
      'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi45',
    restaurantId: 'r10',
    categoryId: 'mc24',
    categoryName: 'Pastries',
    name: 'Croissant',
    description: 'Buttery, flaky French croissant baked fresh daily',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi46',
    restaurantId: 'r10',
    categoryId: 'mc25',
    categoryName: 'Ice Cream',
    name: 'Gelato Cup (2 scoops)',
    description: "Artisan Italian gelato. Ask about today's flavors.",
    price: 799,
    imageUrl:
      'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80',
    isPopular: false,
    tags: [],
  },

  {
    id: 'mi47',
    restaurantId: 'r13',
    categoryId: 'mc26',
    categoryName: 'Nigiri & Sashimi',
    name: 'Salmon Sashimi (5pc)',
    description:
      'Fresh Norwegian salmon, thinly sliced, with wasabi and ginger',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi48',
    restaurantId: 'r13',
    categoryId: 'mc26',
    categoryName: 'Nigiri & Sashimi',
    name: 'Tuna Nigiri (4pc)',
    description: 'Bluefin tuna over seasoned sushi rice with a touch of wasabi',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
    isPopular: true,
    tags: ['Premium'],
  },
  {
    id: 'mi49',
    restaurantId: 'r13',
    categoryId: 'mc27',
    categoryName: 'Specialty Rolls',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted fresh fish, avocado',
    price: 1899,
    imageUrl:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80',
    isPopular: true,
    tags: ["Chef's Special"],
  },
  {
    id: 'mi50',
    restaurantId: 'r13',
    categoryId: 'mc27',
    categoryName: 'Specialty Rolls',
    name: 'Volcano Roll',
    description:
      'Spicy tuna, cream cheese, avocado with baked spicy crab topping',
    price: 1799,
    imageUrl:
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },
  {
    id: 'mi51',
    restaurantId: 'r13',
    categoryId: 'mc28',
    categoryName: 'Appetizers',
    name: 'Miso Soup',
    description:
      'Traditional Japanese miso soup with tofu, wakame, and scallions',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi52',
    restaurantId: 'r13',
    categoryId: 'mc29',
    categoryName: 'Sets & Platters',
    name: 'Omakase Set',
    description:
      "Chef's selection of 12 premium pieces with miso soup and salad",
    price: 3999,
    imageUrl:
      'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80',
    isPopular: true,
    tags: ['Premium', "Chef's Special"],
  },

  {
    id: 'mi53',
    restaurantId: 'r6',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Kung Pao Chicken',
    description:
      'Diced chicken with peanuts, chili peppers, and Sichuan peppercorns',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80',
    isPopular: true,
    tags: ['Spicy'],
  },
  {
    id: 'mi54',
    restaurantId: 'r6',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Dim Sum Platter',
    description:
      'Assorted steamed dumplings: har gow, siu mai, and crystal shrimp',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi55',
    restaurantId: 'r6',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Peking Duck',
    description:
      'Crispy roasted duck with pancakes, hoisin sauce, and scallions',
    price: 2899,
    imageUrl:
      'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&q=80',
    isPopular: true,
    tags: ["Chef's Special"],
  },
  {
    id: 'mi56',
    restaurantId: 'r6',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Mapo Tofu',
    description: 'Silky tofu in spicy fermented bean sauce with ground pork',
    price: 1299,
    imageUrl:
      'https://images.unsplash.com/photo-1582452919408-aca3e2a2c101?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },
  {
    id: 'mi57',
    restaurantId: 'r6',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Fried Rice',
    description: 'Wok-fried jasmine rice with egg, vegetables, and soy sauce',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
    isPopular: false,
    tags: [],
  },

  {
    id: 'mi58',
    restaurantId: 'r8',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Smoked Brisket Plate',
    description:
      '12-hour oak-smoked beef brisket with two sides of your choice',
    price: 2199,
    imageUrl:
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi59',
    restaurantId: 'r8',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Pulled Pork Sandwich',
    description: 'Slow-smoked pulled pork, tangy vinegar slaw, brioche bun',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi60',
    restaurantId: 'r8',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Baby Back Ribs (Full)',
    description: 'Fall-off-the-bone tender ribs with smoky chipotle glaze',
    price: 2699,
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi61',
    restaurantId: 'r8',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Mac & Cheese',
    description: 'Creamy four-cheese mac topped with crispy breadcrumbs',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi62',
    restaurantId: 'r8',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Cornbread',
    description: 'Sweet and savory cornbread with honey butter',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },

  {
    id: 'mi63',
    restaurantId: 'r9',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Pad Thai',
    description:
      'Classic stir-fried rice noodles with shrimp, tofu, peanuts, lime',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi64',
    restaurantId: 'r9',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Green Curry',
    description:
      'Thai green curry with coconut milk, bamboo shoots, Thai basil',
    price: 1599,
    imageUrl:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
    isPopular: true,
    tags: ['Spicy'],
  },
  {
    id: 'mi65',
    restaurantId: 'r9',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Tom Yum Soup',
    description:
      'Hot and sour soup with shrimp, lemongrass, galangal, kaffir lime',
    price: 1299,
    imageUrl:
      'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&q=80',
    isPopular: false,
    tags: ['Spicy'],
  },
  {
    id: 'mi66',
    restaurantId: 'r9',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Massaman Curry',
    description:
      'Rich peanut curry with tender beef, potatoes, and warm spices',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi67',
    restaurantId: 'r9',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Mango Sticky Rice',
    description: 'Sweet coconut sticky rice with fresh ripe mango slices',
    price: 799,
    imageUrl:
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },

  {
    id: 'mi68',
    restaurantId: 'r11',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Lobster Roll',
    description:
      'Fresh Maine lobster, butter, lemon, on a toasted split-top bun',
    price: 2499,
    imageUrl:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&q=80',
    isPopular: true,
    tags: ['Premium'],
  },
  {
    id: 'mi69',
    restaurantId: 'r11',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Poke Bowl',
    description: 'Fresh ahi tuna, rice, avocado, edamame, seaweed, ponzu',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi70',
    restaurantId: 'r11',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Fish & Chips',
    description: 'Beer-battered cod with crispy fries and tartar sauce',
    price: 1599,
    imageUrl:
      'https://images.unsplash.com/photo-1580217593608-61931cebc837?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi71',
    restaurantId: 'r11',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Grilled Salmon',
    description:
      'Atlantic salmon fillet with lemon-dill sauce and roasted vegetables',
    price: 2199,
    imageUrl:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
    isPopular: false,
    tags: ['Healthy'],
  },

  {
    id: 'mi72',
    restaurantId: 'r12',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Cheese Pizza (Whole)',
    description: 'Classic New York cheese pizza with hand-tossed thin crust',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    isPopular: true,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi73',
    restaurantId: 'r12',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Supreme Pizza',
    description: 'Pepperoni, sausage, peppers, onions, mushrooms, olives',
    price: 1899,
    imageUrl:
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi74',
    restaurantId: 'r12',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Calzone',
    description: 'Folded pizza dough stuffed with ricotta, mozzarella, and ham',
    price: 1399,
    imageUrl:
      'https://images.unsplash.com/photo-1536964549-a75a15eb8ccd?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi75',
    restaurantId: 'r12',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Garlic Knots (6pc)',
    description: 'Soft, buttery garlic knots with marinara dipping sauce',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },

  {
    id: 'mi76',
    restaurantId: 'r14',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Classic Cheeseburger',
    description:
      'Grass-fed beef patty, American cheese, lettuce, tomato, pickle',
    price: 1299,
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi77',
    restaurantId: 'r14',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Western Burger',
    description: 'BBQ sauce, crispy onion ring, bacon, cheddar, jalapeños',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80',
    isPopular: true,
    tags: ['Spicy'],
  },
  {
    id: 'mi78',
    restaurantId: 'r14',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with chipotle mayo',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi79',
    restaurantId: 'r14',
    categoryId: 'def4',
    categoryName: 'Drinks',
    name: 'Vanilla Milkshake',
    description: 'Thick and creamy vanilla milkshake with real vanilla bean',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
    isPopular: false,
    tags: [],
  },

  {
    id: 'mi80',
    restaurantId: 'r15',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Carbonara',
    description:
      'Spaghetti with guanciale, egg yolk, pecorino romano, black pepper',
    price: 1699,
    imageUrl:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
    isPopular: true,
    tags: ['Best Seller'],
  },
  {
    id: 'mi81',
    restaurantId: 'r15',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Truffle Tagliatelle',
    description:
      'Fresh egg tagliatelle with black truffle cream sauce and parmesan',
    price: 2199,
    imageUrl:
      'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&q=80',
    isPopular: true,
    tags: ['Premium'],
  },
  {
    id: 'mi82',
    restaurantId: 'r15',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Lasagna Bolognese',
    description:
      'Layers of fresh pasta, slow-cooked ragù, béchamel, and parmesan',
    price: 1799,
    imageUrl:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi83',
    restaurantId: 'r15',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Pesto Penne',
    description:
      'Penne with fresh basil pesto, pine nuts, and sun-dried tomatoes',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
  {
    id: 'mi84',
    restaurantId: 'r15',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Tiramisu',
    description:
      'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
    isPopular: true,
    tags: [],
  },

  {
    id: 'mi85',
    restaurantId: 'r16',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: "General Tso's Chicken",
    description:
      'Crispy chicken in sweet and spicy sauce with steamed broccoli',
    price: 1399,
    imageUrl:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=80',
    isPopular: true,
    tags: ['Spicy'],
  },
  {
    id: 'mi86',
    restaurantId: 'r16',
    categoryId: 'def1',
    categoryName: 'Popular Items',
    name: 'Beef Chow Fun',
    description:
      'Flat rice noodles wok-fried with beef, bean sprouts, and chives',
    price: 1499,
    imageUrl:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80',
    isPopular: true,
    tags: [],
  },
  {
    id: 'mi87',
    restaurantId: 'r16',
    categoryId: 'def2',
    categoryName: 'Main Courses',
    name: 'Orange Chicken',
    description: 'Crispy chicken bites in tangy orange glaze with steamed rice',
    price: 1349,
    imageUrl:
      'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&q=80',
    isPopular: false,
    tags: [],
  },
  {
    id: 'mi88',
    restaurantId: 'r16',
    categoryId: 'def3',
    categoryName: 'Sides',
    name: 'Spring Rolls (4pc)',
    description: 'Crispy vegetable spring rolls with sweet chili sauce',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1548507200-d6880a992de3?w=400&q=80',
    isPopular: false,
    tags: ['Vegetarian'],
  },
];
