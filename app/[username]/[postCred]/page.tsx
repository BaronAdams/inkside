"use client"

import NavLink from '@/components/NavLink'
import { dislike, increasePostViews, like } from '@/lib/actions/posts'
import Image from 'next/image'
import React, { useEffect, useState, useTransition } from 'react'
import { Button, Loading } from 'react-daisyui'
import { formatHTML } from '@/components/Editor'
import { MdOutlineMonitorHeart, MdOutlineRemoveRedEye, MdOutlineShare } from 'react-icons/md'
import { formatDate } from '@/lib/utils'
import { usePost } from '@/lib/hooks/posts'
import { useSession } from 'next-auth/react'
import { navigate } from '@/lib/actions/navigation'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

const SinglePost = ({ params }: { params:{ username:string, postCred:string  } }) => {
  const session = useSession()
  const { username, postCred } = params
  const { post, error, isLoading, mutate } = usePost(username, postCred)
  const userId = session.data?.user?.id

  useEffect(() => {
    (async()=>{
      if(post?._id) await increasePostViews(post._id)
    })()
  }, [post && isLoading])

  if(isLoading){
    return (
        <div className="w-screen mt-[73.83px] h-[calc(100vh-73.83px)] flex justify-center items-center">
            <Loading className='w-[70px] h-[70px]' />
        </div>
    )
  }
  
  if(error){
    return (
        <div className="w-screen mt-[73.83px] h-[calc(100vh-73.83px)] flex flex-col gap-6 justify-center items-center">
            <p>Une erreur est survenue ! Veuillez réessayer ! </p>
        </div>
    )
  } 
  
  if(!post?._id){
    return(
        <div className="w-screen mt-[73.83px] h-[calc(100vh-73.83px)] flex flex-col gap-6 justify-center items-center ">
            <h1 className='text-[90px]'>404</h1>
            <p className='text-[22px] font-semibold'>Cet article n'existe pas</p>
            <p>La page spécifiée est introuvable</p>
        </div>
    )
  }

  if(post?._id){
    console.log(post)
    return(
      <main className='mt-[73.83px]'>
         <section>
            <div className="container mx-auto px-5 md:px-0 font-work">
               <div className="text-sm breadcrumbs py-8">
                  <ul>
                     <li>
                        <NavLink path="/" className='text-base-content'>Home</NavLink>
                     </li>
                     <li className='before:block before:ml-2 before:mr-3 before:content-[""] before:h-3 before:w-3 before:rotate-45 before:bg-transparent before:opacity-[0.4] before:border-t before:border-r '>
                        <NavLink path="/category" className='text-base-content'>Technology</NavLink>
                     </li>
                     <li className='text-base-content/60 before:block before:ml-2 before:mr-3 before:content-[""] before:h-3 before:w-3 before:rotate-45 before:bg-transparent before:opacity-[0.4] before:border-t before:border-r '>
                        The Art of Traveling: Tips and Tricks for a Memorable Journey
                     </li>
                  </ul>
               </div>
               <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
                  <div className="col-span-12 lg:col-span-8">
                     <div className="py-5">
                        <div className="w-fit text-white px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium">
                           {post.categories[0]}
                        </div>
                        <h3 className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 ">
                           {post.title}
                        </h3>
                        <div className="mt-3 md:mt-6 flex items-center gap-5 text-base-content/60">
                           <div className=" flex items-center gap-3">
                              <div className="avatar">
                                 <div className="w-9 rounded-full">
                                    <img
                                       src="/avatar.png"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <NavLink
                                 path="/"
                                 className=" text-xs md:text-sm font-medium hover:text-primary transition hover:duration-300"
                              >
                                 {post.author.name}
                              </NavLink>
                           </div>
                           <p className="text-xs md:text-sm">{formatDate(post.createdAt)}</p>
                        </div>
                     </div>
                     <div className="mt-8">
                        <img
                           width="800"
                           height="462"
                           alt={`blog_image`}
                           className={`rounded-xl`}
                           src={post.coverPic}
                        />
                     </div>

                     {/* article section start  */}
                     <div className="font-serif">
                      <div className="pt-8 flex gap-6">
                        <div className='flex'>
                           <MdOutlineRemoveRedEye size={20} />
                           <h5 className={"text-xs md:text-sm font-medium ml-2"} >{post.views}</h5>
                        </div>
                        <div className='flex' onClick={async () => {
                                 try {
                                    // @ts-ignore
                                    let likes = post.likes
                                    if(!userId) {
                                       navigate('/login')
                                       return;
                                    }
                                    if(likes.includes(userId)){
                                       likes = likes.filter((elt:string) => elt !== userId)
                                       await mutate(dislike(post._id), {
                                          optimisticData: {...post, likes:likes },
                                          rollbackOnError: true,
                                          populateCache: true,
                                          revalidate: false
                                       });
                                       console.log("Successfully disliked");
                                    }else{
                                       await mutate(like(post._id), {
                                          optimisticData: {...post, likes:[...likes,userId] },
                                          rollbackOnError: true,
                                          populateCache: true,
                                          revalidate: false
                                       });
                                       console.log("Successfully liked");
                                    }
                                    
                                 } catch (e) {
                                    // If the API errors, the original data will be
                                    // rolled back by SWR automatically.
                                    console.log("Failed to like/dislike.");
                                 }
                              }} >
                           {post.likes.includes(userId) ? (<IoHeart color='red' size={20} />) : (<IoHeartOutline size={20} />)}
                           <h5 className={"text-xs md:text-sm font-medium ml-2"} >{post.likes.length}</h5>
                        </div>
                        <div className='flex'>
                           <MdOutlineShare size={20} />
                           <h5 className={"text-xs md:text-sm font-medium ml-2"} >{post.shares.length}</h5>
                        </div>
                      </div>
                      <div className="py-8">
                        {formatHTML(post.content)}
                      </div>
                        {/* <div className="mt-8">
                           <p className="text-xl leading-8 text-base-content/80">
                              Traveling is an enriching experience that opens up new
                              horizons, exposes us to different cultures, and creates
                              memories that last a lifetime. However, traveling can
                              also be stressful and overwhelming, especially if you
                              dont plan and prepare adequately. In this blog article,
                              well explore tips and tricks for a memorable journey and
                              how to make the most of your travels. <br /> <br /> One
                              of the most rewarding aspects of traveling is immersing
                              yourself in the local culture and customs. This includes
                              trying local cuisine, attending cultural events and
                              festivals, and interacting with locals. Learning a few
                              phrases in the local language can also go a long way in
                              making connections and showing respect.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Research Your Destination
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Traveling is an enriching experience that opens up new
                              horizons, exposes us to different cultures, and creates
                              memories that last a lifetime. However, traveling can
                              also be stressful and overwhelming, especially if you
                              dont plan and prepare adequately. In this blog article,
                              well explore tips and tricks for a memorable journey and
                              how to make the most of your travels. <br /> <br /> One
                              of the most rewarding aspects of traveling is immersing
                              yourself in the local culture and customs. This includes
                              trying local cuisine, attending cultural events and
                              festivals, and interacting with locals. Learning a few
                              phrases in the local language can also go a long way in
                              making connections and showing respect.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Plan Your Itinerary
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Traveling is an enriching experience that opens up new
                              horizons, exposes us to different cultures, and creates
                              memories that last a lifetime. However, traveling can
                              also be stressful and overwhelming, especially if you
                              dont plan and prepare adequately. In this blog article,
                              well explore tips and tricks for a memorable journey and
                              how to make the most of your travels. <br /> <br /> One
                              of the most rewarding aspects of traveling is immersing
                              yourself in the local culture and customs. This includes
                              trying local cuisine, attending cultural events and
                              festivals, and interacting with locals. Learning a few
                              phrases in the local language can also go a long way in
                              making connections and showing respect.
                           </p>
                        </div>
                        <div className="p-8 bg-base-200 rounded-xl border-l-4  border-base-content/10 mt-8">
                           <p className="text-base-content italic text-2xl">
                              “ Traveling can expose you to new environments and
                              potential health risks, so its crucial to take
                              precautions to stay safe and healthy. ”
                           </p>
                        </div>
                        <div className="mt-8">
                           <img
                              width="800"
                              height="462"
                              alt={`blog_image`}
                              className={`rounded-xl`}
                              src="/blog2.png"
                           />
                        </div>
                        <div className="flex items-center justify-center my-8 font-work">
                           <div className="py-4 bg-base-content/10 text-base-content/60 text-center rounded-xl w-11/12">
                              <p className="text-sm">Advertisement</p>
                              <h6 className="text-xl font-semibold leading-[24px]">
                                 You can place ads
                              </h6>
                              <p className="text-lg leading-[26px]">750x100</p>
                           </div>
                        </div>
                        <div className="mb-20">
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mb-4">
                              Pack Lightly and Smartly
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Packing can be a daunting task, but with some careful
                              planning and smart choices, you can pack light and
                              efficiently. Start by making a packing list and sticking
                              to it, focusing on versatile and comfortable clothing
                              that can be mixed and matched. Invest in quality luggage
                              and packing organizers to maximize space and minimize
                              wrinkles.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Stay Safe and Healthy
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Packing can be a daunting task, but with some careful
                              planning and smart choices, you can pack light and
                              efficiently. Start by making a packing list and sticking
                              to it, focusing on versatile and comfortable clothing
                              that can be mixed and matched. Invest in quality luggage
                              and packing organizers to maximize space and minimize
                              wrinkles.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Immerse Yourself in the Local Culture
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              One of the most rewarding aspects of traveling is
                              immersing yourself in the local culture and customs.
                              This includes trying local cuisine, attending cultural
                              events and festivals, and interacting with locals.
                              Learning a few phrases in the local language can also go
                              a long way in making connections and showing respect.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Capture Memories
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Finally, dont forget to capture memories of your
                              journey. Whether is through photographs, journaling, or
                              souvenirs, preserving the moments and experiences of
                              your travels can bring joy and nostalgia for years to
                              come. However, its also essential to be present in the
                              moment and not let technology distract you from the
                              beauty of your surroundings.
                           </p>
                           <h5 className="text-2xl leading-7 text-base-content font-semibold mt-8 mb-4">
                              Conclusion:
                           </h5>
                           <p className="text-xl leading-8 text-base-content/80">
                              Traveling is an art form that requires a blend of
                              planning, preparation, and spontaneity. By following
                              these tips and tricks, you can make the most of your
                              journey and create memories that last a lifetime. So
                              pack your bags, embrace the adventure, and enjoy the
                              ride.
                           </p>
                        </div> */}
                     </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none">
                     <div className="p-8 border border-base-content/10 rounded-xl w-full">
                     <h5 className="text-base-content font-bold text-2xl font-work">
                     Latest Post
                     </h5>
                     <div className="grid grid-cols-1 gap-6 mt-8">
                     {[1, 2, 3, 4, 5, 6].map((item: any) => (
                     <div key={item} className='card'>
                           <div className="card-body p-0">
                           <div className="flex items-center gap-4 font-work">
                              <figure className="flex-none">
                                 <NavLink path="/single-post">
                                 <Image
                                    width={110}
                                    height={190}
                                    className='rounded-md text-transparent'
                                    alt='post image'
                                    src={'/blog2.png'}
                                 />
                                 </NavLink>
                              </figure>
                              <div>
                                 <h5>
                                 <NavLink path="/single-post" className='font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300'>
                                 The Ultimate Guide to Planning a Trip Abroad
                                 </NavLink>
                                 </h5>
                                 <p className='mt-2.5 text-base-content/60 text-sm'>Dec 27, 2022</p>
                              </div>
                           </div>
                           </div>
                     </div>
                     ))}
                  </div>
                     </div>
                     <div className="rounded-xl border border-base-content border-opacity-10 p-8">
                     <h4 className='text-xl font-semibold leading-6 text-base-content'>Category</h4>
                     <div className="pt-6">
                     {[1,2,3,4,5,6,7].map((item: any)=>(
                     <div className="flex items-center justify-between last:border-none border-b border-base-content border-opacity-10 py-3.5">
                        <NavLink path="/category" className='text-base font-medium text-base-content text-opacity-70 capitalize hover:text-primary transition ease-in-out duration-300'>
                           Technology
                        </NavLink>
                        <span className="px-2 py-1 rounded-md bg-primary bg-opacity-5 text-primary text-xs font-medium">51</span>
                     </div>
                     ))}
                     </div>
                     </div>
                     <div className="grid items-center justify-center bg-base-content/10 rounded-xl  min-h-[360px] max-w-[250px] w-full mx-auto">
                     <div className="text-base-content/60 text-center font-work ">
                     <p className="text-sm">Advertisement</p>
                     <p className="text-xl font-semibold">You can place ads</p>
                     <p className="text-lg">250x360</p>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
    )
  }
}

export default SinglePost