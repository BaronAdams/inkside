import NextAuth from 'next-auth';
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
          .safeParse({ email: credentials.email, password: credentials.password });
 
        if (parsedCredentials.success) {
          console.log('Credentials are successfully parsed')
          const { email, password } = parsedCredentials.data;
          console.log(`email : ${email} ; password: ${password} `)

          const user = await User.findOne({email:email});
          if (!user?._id) throw Error("Utilisateur inconnu") ;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) throw Error("Mot de passe incorrect") ;
          return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks:{
    //@ts-ignore
    async session({ session }) {
      const sessionUser = await User.findOne({email: session?.user?.email})

      if(sessionUser?._id){
        return {
          ...session,
          user: {
            ...session.user,
            id: sessionUser?._id,
            username: sessionUser?.username,
            image: sessionUser?.profileImg
          }
        }
      }
    }      
  }
});