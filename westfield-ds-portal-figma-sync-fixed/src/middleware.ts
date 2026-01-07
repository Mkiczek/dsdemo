import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "ds_portal_demo_ok";

// Protect everything except Next.js assets, auth gate routes, and favicon.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const allow =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/gate") ||
    pathname.startsWith("/gate") ||
    pathname === "/favicon.ico";

  if (allow) return NextResponse.next();

  const expected = process.env.DEMO_ACCESS_CODE;
  // If no gate configured, allow (useful for local dev).
  if (!expected) return NextResponse.next();

  const ok = req.cookies.get(COOKIE_NAME)?.value === "1";
  if (!ok) {
    const url = req.nextUrl.clone();
    url.pathname = "/gate";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
