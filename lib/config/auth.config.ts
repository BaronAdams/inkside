import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';
import { navigate } from '../actions/navigation';
 
export const authConfig = {
  pages: {
    signIn: '/login',
    newUser:'/register'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const privatePages = ['/write','/profile','/settings','/myspace']
      const isOnPrivatePage = privatePages.includes(nextUrl.pathname) || nextUrl.pathname.startsWith('/posts//edit');
      if (isOnPrivatePage) {
        if (!isLoggedIn) return false; // Redirect unauthenticated users to login page
      } 
      // else if (isLoggedIn) {
      //   // navigate('/profile')
      //   return Response.redirect(new URL('/blog', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;