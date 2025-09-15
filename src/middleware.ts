import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_session";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminArea = pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
  if (!isAdminArea) return NextResponse.next();

  // Allow login page without session
  if (pathname === "/admin/login") return NextResponse.next();

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!cookie) {
    const url = new URL("/admin/login", request.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};


