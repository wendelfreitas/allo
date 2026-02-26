import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '../_data/orders';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    items,
    restaurantId,
    restaurantName,
    deliveryAddress,
    paymentMethod,
    deliveryFee,
  } = body;

  if (!items?.length || !restaurantId || !deliveryAddress || !paymentMethod) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const order = createOrder({
    items,
    restaurantId,
    restaurantName,
    deliveryAddress,
    paymentMethod,
    deliveryFee: deliveryFee || 299,
  });

  return NextResponse.json({ data: order }, { status: 201 });
}
