"use server"

import { signIn, signOut } from './auth';
import { AuthError } from 'next-auth';
import { User } from './database/models';
import bcrypt from 'bcryptjs';
 
export async function authenticate(
  prevState: undefined | { sucess: boolean, error?:undefined }| { sucess?: undefined, error:string },
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function register(
    prevState: undefined | { sucess: boolean, error?:undefined }| { sucess?: undefined, error:string } ,
    formData: FormData,
  ) {
    try {
      const existingEmail = await User.findOne({email: formData?.get('email')});
      if(existingEmail?._id) return { error:"Cet email existe déja" };

      const existingUsername = await User.findOne({email: formData?.get('username')});
      if(existingUsername?._id) return { error:"Ce pseudo existe déja"};
      
      //@ts-ignore
      const hashedPassword = await bcrypt.hash(formData?.get('password'), 10)

      const newUser = new User({
        name: formData.get('name'),
        username: formData.get('username'),
        email: formData.get('email'),
        password: hashedPassword
      })

      await newUser.save();

      await signIn('credentials', formData);
      console.log("Logged")

      return { success: true }
    } catch (error) {
      //@ts-ignore
        switch (error?.type) {
          case 'CallbackRouteError':
            //@ts-ignore
            return { error: error?.cause.err.message };
          default:
            return { error: 'Une erreur est survenue ! Veuillez réessayer !'};
      }
    }
}

export async function logOut(){
  await signOut();
}
