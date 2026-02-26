import { NextResponse } from 'next/server';
import { categories } from '../_data/categories';

export async function GET() {
  return NextResponse.json({ data: categories });
}
