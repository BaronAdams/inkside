"use server"

import { signIn, signOut } from '../auth';
import { AuthError } from 'next-auth';
import { User } from '../database/models';
import bcrypt from 'bcryptjs';
import { z } from "zod"
import { redirect } from 'next/navigation';
import { ErrorAuthFields } from '../types';
import { loginCredentialsSchema, registerCredentialsSchema } from '../zod-schemas';


export async function authenticate(formData: FormData) {
  const { email, password } = Object.fromEntries(formData)

  let success = false;
  let error : ErrorAuthFields = {};
 
 try {
    loginCredentialsSchema.parse({ email, password });
  } catch (err){
    if (err instanceof z.ZodError){
      for(let iss of err.issues){
        error = { ...error, [iss.path[0]]: iss.message }
      }
      return error 
    }
 }

  try {
    await signIn('credentials', { email, password, redirect:false })
    success = true;
  } catch (error) {
    if(error instanceof AuthError){
      //@ts-ignore
        switch (error?.type) {
          case 'CallbackRouteError':
            //@ts-ignore
            return { msg: error?.cause.err.message };
          case 'CredentialsSignin':
            //@ts-ignore
            return { msg: error?.cause.err.message };
          default:
            return { msg: 'Une erreur est survenue ! Veuillez réessayer !'};
        }
    }
    else{
      return { msg: 'Une erreur est survenue ! Veuillez réessayer !'};
    }
  }finally{
    if(success) redirect('/myspace')
  }
}

export async function register(formData: FormData) {
   let error : ErrorAuthFields = {};

   const { email, name, username, password } = Object.fromEntries(formData)
   let success = false;
  
    try {
      registerCredentialsSchema.parse({ email, name, username, password });
   } catch (err){
      if (err instanceof z.ZodError){
        for(let iss of err.issues){
          error = { ...error, [iss.path[0]]: iss.message }
        }
        return { error }
      }
   }

    try {
      const existingEmail = await User.findOne({ email });
      if(existingEmail?._id) return { email: "Cet email est déja utilisé" };

      const existingUsername = await User.findOne({username});
      if(existingUsername?._id) return { username: "Ce pseudonyme est déja utilisé" };
      
      //@ts-ignore
      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword
      })

      await newUser.save();

      await signIn('credentials', { email, password, redirect:false });
      return { success:true }
    } catch (error) {
      //@ts-ignore
      console.log(error)
      if(error instanceof AuthError){
        //@ts-ignore
          switch (error?.type) {
            case 'CallbackRouteError':
              //@ts-ignore
              return { error: { msg: error?.cause.err.message } };
            case 'CredentialsSignin':
              //@ts-ignore
              return { error: {msg: error?.cause.err.message} };
            default:
              return { error: {msg: 'Une erreur est survenue ! Veuillez réessayer !'} };
          }
      }
      else{
        return { error: { msg: 'Une erreur est survenue ! Veuillez réessayer !'} };
      }
    }
}

export async function logOut(){
  await signOut();
}