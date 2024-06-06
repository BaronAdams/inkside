"use client"

import NavLink from '@/components/NavLink'
import { register } from '@/lib/actions/auth'
import React, { useEffect, useState, useTransition, useRef } from 'react'
import { FaCheckCircle, FaRegTimesCircle, FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineAlternateEmail, MdOutlineEmail } from 'react-icons/md'
import { GoKey } from 'react-icons/go'
import { Loading } from 'react-daisyui'
import { categories } from '@/lib/data/categoriesData'
import { Button } from 'react-daisyui'
import { IoMdCheckmark } from 'react-icons/io'
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'
import { setCategories } from '@/lib/actions/posts'

const Register = () => {
    const [error, setError] = useState<any>(undefined)
    const [catError, setCatError] = useState<any>(undefined)
    const [isPending, startTransition] = useTransition()
    const [catPending, startCatTransition] = useTransition()
    const [choosen, setChoosen] = useState<string[]>([])  

    const handleClick = (text:string)=>{
       if(choosen.includes(text)){
          setChoosen((prev)=> prev.filter(elt => elt !== text))

       }else{
          setChoosen((prev) => [...prev, text])
       }
    }

    const handleSetCategories = ()=>{
      startCatTransition(async()=>{
         const err = await setCategories(choosen)
         if(err){
            setCatError(err);
            return;
         }
      })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()

      let formData = new FormData(e.target as HTMLFormElement)
      startTransition(async()=>{
         const res = await register(formData)
         if(res?.error){
            setError(res.error);
            return;
         }
         // @ts-ignore
         if(res.success) document.querySelector('.swiper-button-next')?.click();
      })
    }

    useEffect(() => {
      console.log(window.innerWidth)
    }, [])
    

   return (
      <Swiper 
         slidesPerView={1}
         modules={[Navigation]}
         className={`${window.innerHeight > 800 ? 'h-screen' : 'h-[824px]'}`}
         navigation
      >
      <SwiperSlide className={`w-screen swiper-no-swiping h-full`}>
         <form onSubmit={handleSubmit} className="w-[50%] h-full absolute max-[875px]:w-full max-[533px]:h-[600px] py-6 px-[50px] max-[400px]:px-8 ">
               <p className="text-xl font-semibold text-base-content">
                  Créez un compte Inkside
               </p>
               <p className="mt-2 text-base text-base-content/60">
                  Vous avez déja un compte ? <NavLink path='/login' className='text-primary underline'>Connectez-vous ici</NavLink>
               </p>
               <div className="relative flex flex-col gap-2 mt-7">
                  <label className='text-sm' htmlFor="name">Votre Nom</label>
                  <input
                     id='name'
                     name='name'
                     placeholder="John Doe"
                     type="text"
                     minLength={2}
                     required
                     className={`px-4 py-2 border-2 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 ${error?.name ? 'border-red-500 focus:border-red-500' : 'border-base-content/10 focus:border-black'}`}
                  />
                  <FaRegUserCircle className="w-[20px] h-[16px] absolute right-4 top-[60%] text-base-content" />
               </div>
               {error?.name &&  (<p className='text-red-500 mt-2 text-sm'>{error?.name}</p>)}
               <div className="relative flex flex-col gap-2 mt-5">
                  <label className='text-sm' htmlFor="username">Votre pseudo</label>
                  <input
                     id='username'
                     name='username'
                     placeholder="johndoe47"
                     type="text"
                     minLength={3}
                     required
                     className={`px-4 py-2 border-2 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 ${error?.username ? 'border-red-500 focus:border-red-500' : 'border-base-content/10 focus:border-black'}`}
                  />
                  <MdOutlineAlternateEmail className="w-[20px] h-[16px] absolute right-4 top-[60%] text-base-content" />
               </div>
               {error?.username &&  (<p className='text-red-500 mt-2 text-sm'>{error?.username}</p>)}
               <div className="relative flex flex-col gap-2 mt-5">
                  <label className='text-sm' htmlFor="email">Votre adresse email</label>
                  <input
                     id='email'
                     name='email'
                     placeholder="johndoe@gmail.com"
                     type="email"
                     required
                     className={`px-4 py-2 border-2 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 ${error?.email ? 'border-red-500 focus:border-red-500' : 'border-base-content/10 focus:border-black'}`}
                  />
                  <MdOutlineEmail className="w-[20px] h-[16px] absolute right-4 top-[60%] text-base-content" />
               </div>
               {error?.email &&  (<p className='text-red-500 mt-2 text-sm'>{error?.email}</p>)}
               <div className="relative flex flex-col gap-2 mt-5">
                  <label className='text-sm' htmlFor="password">Votre mot de passe</label>
                  <input
                     id='password'
                     name='password'
                     placeholder="s3cr3tpassw0rd"
                     type="password"
                     minLength={6}
                     required
                     className={`px-4 py-2 border-2 rounded-md w-full outline-none text-base-content placeholder:text-sm bg-base-100 ${error?.password ? 'border-red-500 focus:border-red-500' : 'border-base-content/10 focus:border-black'}`}
                  />
                  <GoKey className="w-[20px] h-[16px] absolute right-4 top-[60%] text-base-content" />
               </div>
               {error?.password &&  (<p className='text-red-500 mt-2 text-sm'>{error?.password}</p>)}
               <button type='submit' disabled={isPending} className="btn btn-primary py-3 mt-5 text-center font-medium w-full rounded-md text-white text-sm">
                  { isPending ? (<>En cours de traitement <Loading size='md'/></>) : 'Envoyez'}
               </button>
               {error?.msg && (<p className='mt-2 text-red-500 text-sm'>{error?.msg}</p>)}
               <div className="mt-2 flex w-full justify-between items-center">
                  <div className="w-[40%] h-[1.8px] bg-[#e5e7eb] dark:bg-white"></div>
                  <p className='text-base '>OU</p>
                  <div className="w-[40%] h-[1.8px] bg-[#e5e7eb] dark:bg-white"></div>
               </div>
               <div className="mt-5 w-full">
                  <GoogleLoginButton disabled={true} className='w-full rounded-md'><p className='text-sm'>Inscrivez vous avec Google</p></GoogleLoginButton>
               </div>
               <div className="mt-5 w-full">
                  <GithubLoginButton className='w-full rounded-md'><p className='text-sm'>Inscrivez vous avec Github</p></GithubLoginButton>
               </div>
               <div className="mt-5 w-full">
                  <FacebookLoginButton className='w-full rounded-md'><p className='text-sm'>Inscrivez vous avec Facebook</p></FacebookLoginButton>
               </div>
               <div className="mt-5 w-full">
               </div>
         </form>
         <img src="/image1.png" className={`w-[50%] ${window.innerHeight > 800 ? 'h-screen' : 'h-[824px]'} absolute left-1/2 object-cover max-[875px]:hidden`} alt="Register cover image" />
      </SwiperSlide>
      <SwiperSlide className='w-screen next swiper-no-swiping'>
         <div className="absolute top-0 left-0 flex flex-col gap-4 max-[580px]:gap-3 max-[392px]:gap-[6px] items-start max-[530px]:items-center px-10 py-10 w-full ">
            <h2 className='text-base-content text-left text-[40px] mb-5 font-bold max-[580px]:text-[30px] max-[392px]:text-[23px] '>Catégories d'articles que vous aimerez suivre</h2>
            <div className="w-[90%] max-[530px]:w-full gap-4 flex justify-between max-[530px]:justify-center items-center rounded-xl py-4 flex-wrap mb-5">
            {categories.map((elt,i) => (
                  <span onClick={() => handleClick(elt.value)} key={i} className={`btn no-animation hover:bg-primary hover:text-primary-content border-0 text-sm max-[530px]:text-[12.5px] px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium ${choosen.includes(elt.value) ? 'bg-primary text-primary-content' : 'bg-primary/5 text-primary' } `}>
                     {choosen.includes(elt.value) && ( <IoMdCheckmark size={14} className='text-white mr-[5px]'/> )} {elt.value}
                  </span> 
               ) 
            )}
            </div>
            <Button disabled={catPending} onClick={() => handleSetCategories() } color="primary">
               { catPending ? (<>En cours de traitement <Loading size='md'/></>) : 'Envoyez'}
            </Button>
         </div>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default Register