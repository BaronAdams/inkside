"use client"

import React, { useState, useTransition } from 'react'
import { authenticate } from '@/lib/actions/auth';
import { FaExclamationCircle, FaArrowRight, FaKey } from "react-icons/fa";
import { Loading } from 'react-daisyui';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const Connexion = () => {
   const [error, setError] = useState<any>(undefined)
   const [isPending, startTransition] = useTransition()

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault()

     let formData = new FormData(e.target as HTMLFormElement)
     startTransition(async()=>{
        const err = await authenticate(formData)
        if(err){
           setError(err);
           return;
        }
     })
   }
   
    return (
       <div className="w-screen min-h-screen py-12 flex flex-col justify-center items-center overflow-hidden">
          <form onSubmit={handleSubmit} className="bg-base-500 border-[1.8px] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] light:border-black dark:border-white py-[50px] px-9 rounded-xl">
             <p className="text-center text-xl font-semibold text-base-content">
                Connectez vous à Inkside
             </p>
             <p className="mt-2 text-base text-center text-base-content/60">
                Lisez et publiez vos articles
             </p>
             <div className="relative flex flex-col mt-7">
                <label htmlFor="email" className='text-sm'>Votre adresse email</label>
                <input
                   id='email'
                   name='email'
                   placeholder="johndoe@gmail.com"
                   type="email"
                   required
                   className="mt-2 px-4 py-3 border-2 border-base-content/10 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 focus:border-black "
                />
                <svg
                   width="18"
                   height="14"
                   viewBox="0 0 18 14"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   className="absolute right-4 top-[60%] text-base-content"
                >
                   <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.4375 1.375C1.91973 1.375 1.5 1.79473 1.5 2.3125V11.6875C1.5 12.2053 1.91973 12.625 2.4375 12.625H15.5625C16.0803 12.625 16.5 12.2053 16.5 11.6875V2.3125C16.5 1.79473 16.0803 1.375 15.5625 1.375H2.4375ZM0.25 2.3125C0.25 1.10438 1.22938 0.125 2.4375 0.125H15.5625C16.7706 0.125 17.75 1.10438 17.75 2.3125V11.6875C17.75 12.8956 16.7706 13.875 15.5625 13.875H2.4375C1.22938 13.875 0.25 12.8956 0.25 11.6875V2.3125Z"
                      fill="currentColor"
                   />
                   <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.88165 2.86629C3.09357 2.59382 3.48625 2.54474 3.75871 2.75665L9 6.83321L14.2413 2.75665C14.5138 2.54474 14.9064 2.59382 15.1183 2.86629C15.3303 3.13875 15.2812 3.53143 15.0087 3.74335L9.38371 8.11835C9.15802 8.29389 8.84198 8.29389 8.61629 8.11835L2.99129 3.74335C2.71882 3.53143 2.66974 3.13875 2.88165 2.86629Z"
                      fill="currentColor"
                   />
                </svg>
             </div>
             <div className="relative flex flex-col mt-7">
               <label htmlFor="password" className='text-sm'>Votre mot de passe</label>
                <input
                   id='password'
                   name='password'
                   placeholder="s3cr3t"
                   type="password"
                   required
                   minLength={6}
                   className="mt-2 px-4 py-3 border-2 border-base-content/10 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 focus:border-black "
                />
                <FaKey className="w-[18px] h-[14px] absolute right-4 top-[60%] text-base-content" />
             </div>
             <button type='submit' disabled={isPending} className="btn btn-primary py-3 text-center font-medium w-full rounded-md mt-7 text-white text-sm">
               { isPending ? (<>En cours de traitement <Loading size='md'/></>) : 'Envoyez'}
             </button>
             {error?.msg && (<p className='mt-2 w-full text-center text-red-500 text-sm'> {error?.msg} </p>) }
             <div className="mt-2 flex w-full justify-between items-center">
               <div className="w-[40%] h-[1.8px] bg-[#e5e7eb] dark:bg-white"></div>
               <p className='text-base '>OU</p>
               <div className="w-[40%] h-[1.8px] bg-[#e5e7eb] dark:bg-white"></div>
             </div>
             <div className="mt-7 w-full">
               <GoogleLoginButton disabled className='w-full rounded-md'><p className='text-sm'>Connectez vous avec Google</p></GoogleLoginButton>
             </div>
             <div className="mt-7 w-full">
               <GithubLoginButton className='w-full rounded-md'><p className='text-sm'>Connectez vous avec Github</p></GithubLoginButton>
             </div>
             <div className="mt-7 w-full">
               <FacebookLoginButton className='w-full rounded-md'><p className='text-sm'>Connectez vous avec Facebook</p></FacebookLoginButton>
             </div>
          </form>
       </div>
    )
 }
 
 export default Connexion