import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { usedLicenses, maxLicenses } = data;
  console.log('Received license update:', usedLicenses, maxLicenses);

  // Update your data store or trigger frontend state update...

  return NextResponse.json({ status: 'success' });
}

