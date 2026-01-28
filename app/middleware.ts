// app/middleware.ts（必ずこれをコピー）
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.url;
  const pathname = request.nextUrl.pathname;
  
  // 確実に表示されるように
  console.error('🔥 MIDDLEWARE FIRED!');
  console.error('🔥 URL:', url);
  console.error('🔥 Pathname:', pathname);
  console.error('🔥 Time:', new Date().toISOString());
  
  return NextResponse.next();
}

// 確実に全ルートに適用
export const config = {
  matcher: '/:path*',
};