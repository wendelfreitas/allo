import { NextResponse } from 'next/server';
import { promotions } from '../_data/promotions';

export async function GET() {
  return NextResponse.json({ data: promotions });
}
