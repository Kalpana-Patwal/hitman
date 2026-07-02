// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  
  // Check if the URL is for a service page and doesn't end with a slash
  if (
    pathname.startsWith('/services/') && 
    pathname !== '/services/' && 
    !pathname.endsWith('/')
  ) {
    // Add the trailing slash
    url.pathname = `${pathname}/`;
    
    // Return a 308 Permanent Redirect
    return NextResponse.redirect(url, 308);
  }
  
  return NextResponse.next();
}

// Matcher for URLs that should be processed by the middleware
export const config = {
  matcher: ['/services/:path*'],
};