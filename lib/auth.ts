import NextAuth, { Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './config/auth.config';
import { z } from 'zod';
import { User } from '@/lib/database/models'
import bcrypt from 'bcryptjs';

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        //@ts-ignore
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await User.findOne({email:email});

          if (!user?._id) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks:{
    async session({ session }) {
      const sessionUser = await User.findOne({email: session?.user?.email})
      
      return {
        ...session,
        user: {
          ...session.user,
          id: sessionUser?._id,
          image: sessionUser?.profileImg,
        },
      }
    }
  }
});