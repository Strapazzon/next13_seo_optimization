import { NextRequest } from "next/server";

const defaultLanguage = "en";

function getLanguage(request: NextRequest) {
  const language = request.headers.get("accept-language")?.split(",")[0];
  if (language) {
    return language.split("-")[0];
  }
  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("middleware");
  console.log(pathname);
  const lang = getLanguage(request);

  request.nextUrl.pathname = `/${lang}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/", "/movie/:path*"],
};
