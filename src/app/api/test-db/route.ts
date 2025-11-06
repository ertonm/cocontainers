// app/api/test-db/route.ts
import { getAllContainers } from '@/app/lib/containers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const containers = await getAllContainers();
    return NextResponse.json({ success: true, data: containers });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}