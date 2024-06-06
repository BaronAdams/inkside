import NavLink from '@/components/NavLink'
import PostCard from '@/components/molecules/card/PostCard'
import Link from 'next/link'
import React from 'react'

const MySpace = () => {
  return (
    // <div>
        <section className='mt-[73.83px]'>
            <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
               <h3 className="text-base-content font-bold text-2xl mb-8">
                  Posts publiés
               </h3>
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {/* <Link href={"/write"} className="card w-[360px] p-4 flex justify-center items-center border-[2.5px] border-base-content/10 rounded-xl font-work"> */}
                    {/* <figure>
                        <img
                        src="/blog1.png"
                        alt="email"
                        className={`rounded-xl`}
                        width={360}
                        height={240}
                        />
                    </figure>
                    <div className="card-body py-6 px-2">
                        <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
                        Technology
                        </span>
                        <h3>
                        <NavLink
                            path="/single-post"
                            className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
                        >
                            The Impact of Technology on the Workplace: How Technology is
                            Changing
                        </NavLink>
                        </h3>
                        <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
                        <div className=" flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-9 rounded-full">
                                    <img src="/avatar.png" alt="avatar" />
                                </div>
                            </div>
                            <h5>
                                <NavLink
                                    path="/"
                                    className="text-base font-medium hover:text-primary transition hover:duration-300"
                                >
                                    Jason Francisco
                                </NavLink>
                            </h5>
                        </div>
                        <p className="text-base">August 20, 2022</p>
                        </div>
                    </div> */}
                    {/* <p>Nouvel article +</p>
               </Link> */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                     (item: any, index: number) => (
                        <div key={index}>
                           <PostCard />
                        </div>
                     )
                  )}
               </div>
            </div>
         </section>
    // </div>
  )
}

export default MySpace