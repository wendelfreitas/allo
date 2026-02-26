import { NextResponse } from 'next/server';
import {
  restaurants,
  menuItems,
  getMenuCategories,
} from '../../_data/restaurants';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return NextResponse.json(
      { error: 'Restaurant not found' },
      { status: 404 }
    );
  }

  const items = menuItems.filter((item) => item.restaurantId === restaurant.id);
  const categories = getMenuCategories(restaurant.id);

  return NextResponse.json({
    data: {
      ...restaurant,
      menuCategories: categories,
      menuItems: items,
    },
  });
}
