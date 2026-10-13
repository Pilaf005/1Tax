import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Evaluate maintenance mode condition
  // Enabled ONLY when MAINTENANCE_MODE=true AND not on a Vercel Preview environment
  const isMaintenance =
    process.env.MAINTENANCE_MODE?.toLowerCase() === "true" &&
    process.env.VERCEL_ENV !== "preview";

  // 2. Direct access to maintenance page
  if (pathname === "/maintenance") {
    // If maintenance is disabled, redirect visitors to home
    if (!isMaintenance) {
      return NextResponse.redirect(new URL("/", request.url), 307);
    }
    return NextResponse.next();
  }

  // 3. Always allow static SEO & PWA metadata files
  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) {
    return NextResponse.next();
  }

  // If maintenance mode is disabled, pass through normally
  if (!isMaintenance) {
    return NextResponse.next();
  }

  // 4. Protect backend API routes: return 503 JSON
  if (pathname.startsWith("/api")) {
    return NextResponse.json(
      {
        error: "Service Unavailable",
        message:
          "1Tax is currently undergoing scheduled maintenance. Please try again shortly.",
      },
      {
        status: 503,
        headers: {
          "Retry-After": "3600",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }

  // 5. Redirect public web pages to /maintenance (307 Temporary Redirect)
  // This updates browser URL to /maintenance so AppLayoutClient skips Header and Footer
  const maintenanceUrl = new URL("/maintenance", request.url);
  const response = NextResponse.redirect(maintenanceUrl, 307);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static JS, CSS, fonts)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon)
     * - static image/asset files (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .css, .js)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};

// Aliases for multi-runtime compatibility
export const middleware = proxy;
export default proxy;
