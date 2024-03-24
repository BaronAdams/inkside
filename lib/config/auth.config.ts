import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/connexion',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnBlogPage = nextUrl.pathname.startsWith('/blog');
      if (isOnBlogPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      // else if (isLoggedIn) {
      //   return Response.redirect(new URL('/blog', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;