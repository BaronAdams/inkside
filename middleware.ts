import NextAuth from 'next-auth';
import type { NextMiddleware } from 'next/server'
import { authConfig } from '@/lib/config/auth.config';
 
export default NextAuth(authConfig).auth as NextMiddleware;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

