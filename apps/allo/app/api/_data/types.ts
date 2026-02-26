export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
}

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  description: string;
  cuisineType: string[];
  imageUrl: string;
  coverImageUrl: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minimumOrder: number;
  isOpen: boolean;
  isFeatured: boolean;
  tags: string[];
  address: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  categoryId: string;
  categoryName: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isPopular: boolean;
  tags: string[];
}

export interface RestaurantWithMenu extends Restaurant {
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  totalPrice: number;
}

export type OrderStatus =
  | "confirmed"
  | "preparing"
  | "ready"
  | "out_for_delivery"
  | "delivered";

export interface OrderStatusHistory {
  status: OrderStatus;
  timestamp: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  statusHistory: OrderStatusHistory[];
  deliveryAddress: string;
  paymentMethod: string;
  estimatedDelivery: string;
  createdAt: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  ctaText: string;
  backgroundColor: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
