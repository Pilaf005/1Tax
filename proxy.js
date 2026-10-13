import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. Always allow direct access to maintenance page to prevent loops
  if (pathname === "/maintenance") {
    return NextResponse.next();
  }

  // 2. Always allow static SEO & PWA metadata files
  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) {
    return NextResponse.next();
  }

  // 3. Evaluate maintenance mode condition
  // Enabled ONLY when MAINTENANCE_MODE=true AND not on a Vercel Preview environment
  const isMaintenance =
    process.env.MAINTENANCE_MODE?.toLowerCase() === "true" &&
    process.env.VERCEL_ENV !== "preview";

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

  // 5. Rewrite public web pages to /maintenance
  const maintenanceUrl = new URL("/maintenance", request.url);
  const response = NextResponse.rewrite(maintenanceUrl, {
    status: 503,
    statusText: "Service Unavailable",
  });

  response.headers.set("Retry-After", "3600");
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
