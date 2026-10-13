import { NextResponse } from "next/server";

const PREVIEW_SECRET = process.env.MAINTENANCE_BYPASS_KEY || "1tax2026";
const COOKIE_NAME = "1tax_preview_access";

export function proxy(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Evaluate maintenance mode condition
  // Enabled ONLY when MAINTENANCE_MODE=true AND not on a Vercel Preview environment
  const isMaintenance =
    process.env.MAINTENANCE_MODE?.toLowerCase() === "true" &&
    process.env.VERCEL_ENV !== "preview";

  // 2. Secret Passkey Lock / Unlock on the 1tax.in domain
  const previewParam = searchParams.get("preview") || searchParams.get("access");

  // Lock out (logout from preview)
  if (previewParam === "logout" || searchParams.get("lock") === "1") {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete("preview");
    cleanUrl.searchParams.delete("access");
    cleanUrl.searchParams.delete("lock");
    const response = NextResponse.redirect(new URL("/maintenance", request.url), 307);
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  // Unlock with passkey (e.g., https://1tax.in/?preview=1tax2026)
  if (previewParam && previewParam === PREVIEW_SECRET) {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete("preview");
    cleanUrl.searchParams.delete("access");
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(COOKIE_NAME, "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7-day access
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return response;
  }

  // 3. Check if user already holds the preview access cookie
  const hasPreviewAccess = request.cookies.get(COOKIE_NAME)?.value === "true";
  if (hasPreviewAccess) {
    // If client with access is on /maintenance, send them to home
    if (pathname === "/maintenance") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // Allow unrestricted access to the entire real website!
    return NextResponse.next();
  }

  // 4. Direct access to maintenance page for regular visitors
  if (pathname === "/maintenance") {
    if (!isMaintenance) {
      return NextResponse.redirect(new URL("/", request.url), 307);
    }
    return NextResponse.next();
  }

  // 5. Always allow static SEO & PWA metadata files
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

  // 6. Protect backend API routes: return 503 JSON
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

  // 7. Redirect public web pages to /maintenance (307 Temporary Redirect)
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
