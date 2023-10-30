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

  const response = NextResponse.redirect(request.nextUrl);

  return injectLanguageCookies(request, response, lang);
}

export const config = {
  matcher: ["/", "/movie/:path*"],
};

const injectLanguageCookies = (
  request: NextRequest,
  response: NextResponse,
  language: string
) => {
  if (!languageCookiesName) {
    return response;
  }

  if (request.cookies.get(languageCookiesName)) {
    return response;
  }

  response.cookies.set({
    name: languageCookiesName,
    value: language,
    path: "/",
  });

  return response;
};
