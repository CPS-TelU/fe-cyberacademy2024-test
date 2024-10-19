// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Retrieve the token from the cookies
  const token = req.cookies.get('token');
  console.log('Token:', token);
  if (!token) {
    // If no token, redirect to the login page
    console.log('User not authenticated, redirecting to login.');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Proceed with the request if the user is authenticated
  console.log('User authenticated, proceeding with request.');
  return NextResponse.next();
}

// Specify the paths where this middleware should be applied
export const config = {
  matcher: ['/lms/:path*'], // Protect all routes under /lms
};
