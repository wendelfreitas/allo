import { NextRequest, NextResponse } from 'next/server';
import { restaurants } from '../_data/restaurants';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get('q')?.toLowerCase();
  const cuisine = searchParams.get('cuisine');
  const sort = searchParams.get('sort') || 'rating';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '12', 10);
  const featured = searchParams.get('featured');

  let filtered = [...restaurants];

  if (q) {
    filtered = filtered.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.cuisineType.some((c) => c.toLowerCase().includes(q)) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (cuisine) {
    filtered = filtered.filter((r) =>
      r.cuisineType.some((c) => c.toLowerCase() === cuisine.toLowerCase())
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter((r) => r.isFeatured);
  }

  switch (sort) {
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'delivery_time':
      filtered.sort((a, b) => {
        const aTime = parseInt(a.deliveryTime);
        const bTime = parseInt(b.deliveryTime);
        return aTime - bTime;
      });
      break;
    case 'delivery_fee':
      filtered.sort((a, b) => a.deliveryFee - b.deliveryFee);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => b.rating - a.rating);
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    data: paged,
    total,
    page,
    pageSize,
    totalPages,
  });
}
