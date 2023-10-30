import { NextRequest, NextResponse } from "next/server";

const defaultLanguage = "en";
const languageCookiesName = process.env.LANGUAGE_COOKIE_NAME;

function getLanguage(request: NextRequest): string {
  if (!languageCookiesName) {
    return defaultLanguage;
  }

  const acceptLanguage = request.headers.get("accept-language")?.split(",")[0];
  const cookiesLanguage = request.cookies.get(languageCookiesName);

  if (cookiesLanguage) {
    return cookiesLanguage.value;
  }

  if (acceptLanguage) {
    return acceptLanguage.split("-")[0];
  }
  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lang = getLanguage(request);

  request.nextUrl.pathname = `/${lang}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/", "/movie/:path*"],
};
