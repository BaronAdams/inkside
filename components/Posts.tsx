'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Card, Button, Navbar, Menu, Dropdown } from 'react-daisyui'
import Badge from './Badge'
import NavLink from './NavLink'

const Posts = () => {
  useEffect(() => {
    console.log(window.innerWidth)
  }, [])

  return (
    <>
      <section className='w-screen pt-10 flex justify-center border-box overflow-x-hidden' > 
        <div className="w-[90%] flex flex-col md:flex-row gap-5 ">
          <div className="w-full md:w-6/12">
            <div className="card relative w-fit h-fit font-work">
              <div className="min-h-[370px] sm:min-h-[760px]">
                <figure className="h-full max-w-full">
                  <Image width={660} height={660} src={'/images/nature5.webp'} className='rounded-xl min-h-[370px] sm:min-h-[760px] object-cover' alt='post-thumb'  />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-[15] p-5 sm:p-10">
                <div className="flex flex-wrap items-center gap-1.5">
                  <NavLink path={'/category'}>
                    <Badge color='primary' text='Travel' />
                  </NavLink>
                  <NavLink path={'/category'}>
                    <Badge color='success' text='Adventure' />
                  </NavLink>
                </div>
                <div className="mt-4">
                  <NavLink path={'/single-post'}>
                    <h2 className="text-lg sm:text-xl line-clam-3 md:text-3xl lg:text-4xl font-semibold text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                    The Ultimate Guide to Planning a Trip Abroad
                    </h2>
                  </NavLink>
                </div>
                <div className="mt-5 flex items-center gap-5">
                  <div className=" flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-9 rounded-full">
                        <Image width={100} height={100} src={"/avatar.png"} alt='author'/>
                      </div>
                    </div>
                    <h5>
                      <NavLink path={'/author'} className='text-neutral-content font-medium hover:text-primary transition hover:duration-300'>
                        Metablog
                      </NavLink>
                    </h5>
                  </div>
                  <p className="text-neutral-content">Dec 27, 2022</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
          <div className='w-full md:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className="card relative w-fit h-fit font-work">
                <div className="min-h-[370px]">
                  <figure className="h-full max-w-full">
                    <Image width={660} height={660} className='rounded-xl min-h-[370px] object-cover' src={'/images/nature5.webp'} alt='post-thumb'  />
                  </figure>
                </div>
                <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-[15] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <NavLink path={'/category'}>
                      <Badge color='primary' text='Travel' />
                    </NavLink>
                    <NavLink path={'/category'}>
                      <Badge color='success' text='Adventure' />
                    </NavLink>
                  </div>
                  <div className="mt-4">
                    <NavLink path={'/single-post'}>
                      <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                      The Ultimate Guide to Planning a Trip Abroad
                      </h2>
                    </NavLink>
                  </div>
                  <div className="mt-5 flex items-center gap-5">
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <Image width={100} height={100} src={"/avatar.png"} alt='author'/>
                        </div>
                      </div>
                      <h5>
                        <NavLink path={'/author'} className='text-neutral-content font-medium hover:text-primary transition hover:duration-300'>
                          Metablog
                        </NavLink>
                      </h5>
                    </div>
                    <p className="text-neutral-content">Dec 27, 2022</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            <div className="card relative w-fit h-fit font-work">
                <div className="min-h-[370px]">
                  <figure className="h-full max-w-full">
                    <Image width={660} height={660} className='rounded-xl min-h-[370px] object-cover' src={'/images/nature5.webp'} alt='post-thumb'  />
                  </figure>
                </div>
                <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-[15] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <NavLink path={'/category'}>
                      <Badge color='primary' text='Travel' />
                    </NavLink>
                    <NavLink path={'/category'}>
                      <Badge color='success' text='Adventure' />
                    </NavLink>
                  </div>
                  <div className="mt-4">
                    <NavLink path={'/single-post'}>
                      <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                      The Ultimate Guide to Planning a Trip Abroad
                      </h2>
                    </NavLink>
                  </div>
                  <div className="mt-5 flex items-center gap-5">
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <Image width={100} height={100} src={"/avatar.png"} alt='author'/>
                        </div>
                      </div>
                      <h5>
                        <NavLink path={'/author'} className='text-neutral-content font-medium hover:text-primary transition hover:duration-300'>
                          Metablog
                        </NavLink>
                      </h5>
                    </div>
                    <p className="text-neutral-content">Dec 27, 2022</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            <div className="card relative w-fit h-fit font-work">
                <div className="min-h-[370px]">
                  <figure className="h-full max-w-full">
                    <Image width={660} height={660} className='rounded-xl min-h-[370px] object-cover' src={'/images/nature5.webp'} alt='post-thumb'  />
                  </figure>
                </div>
                <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-[15] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <NavLink path={'/category'}>
                      <Badge color='primary' text='Travel' />
                    </NavLink>
                    <NavLink path={'/category'}>
                      <Badge color='success' text='Adventure' />
                    </NavLink>
                  </div>
                  <div className="mt-4">
                    <NavLink path={'/single-post'}>
                      <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                      The Ultimate Guide to Planning a Trip Abroad
                      </h2>
                    </NavLink>
                  </div>
                  <div className="mt-5 flex items-center gap-5">
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <Image width={100} height={100} src={"/avatar.png"} alt='author'/>
                        </div>
                      </div>
                      <h5>
                        <NavLink path={'/author'} className='text-neutral-content font-medium hover:text-primary transition hover:duration-300'>
                          Metablog
                        </NavLink>
                      </h5>
                    </div>
                    <p className="text-neutral-content">Dec 27, 2022</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
            <div className="card relative w-fit h-fit font-work">
                <div className="min-h-[370px]">
                  <figure className="h-full max-w-full">
                    <Image width={660} height={660} className='rounded-xl min-h-[370px] object-cover' src={'/images/nature5.webp'} alt='post-thumb'  />
                  </figure>
                </div>
                <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-[15] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <NavLink path={'/category'}>
                      <Badge color='primary' text='Travel' />
                    </NavLink>
                    <NavLink path={'/category'}>
                      <Badge color='success' text='Adventure' />
                    </NavLink>
                  </div>
                  <div className="mt-4">
                    <NavLink path={'/single-post'}>
                      <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                        The Ultimate Guide to Planning a Trip Abroad
                      </h2>
                    </NavLink>
                  </div>
                  <div className="mt-5 flex items-center gap-5">
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <Image width={100} height={100} src={"/avatar.png"} alt='author'/>
                        </div>
                      </div>
                      <h5>
                        <NavLink path={'/author'} className='text-neutral-content font-medium hover:text-primary transition hover:duration-300'>
                          Metablog
                        </NavLink>
                      </h5>
                    </div>
                    <p className="text-neutral-content">Dec 27, 2022</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
          </div>
        </div>  
      </section>
      <section className='py-10 w-screen flex justify-center border-box overflow-x-hidden' > 
          <div className="w-[90%] gap-4 flex justify-center items-center border-gray-500 border rounded-xl px-6 py-4 flex-wrap ">
            <span className='btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Technology
            </span>
            <span className='btn no-animation hover:bg-success hover:text-success-content bg-success/5 border-0 text-success text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Health
            </span>
            <span className='btn no-animation hover:bg-secondary hover:text-secondary-content bg-secondary/5 border-0 text-secondary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #LifeStyle
            </span>
            <span className='btn no-animation hover:bg-warning hover:text-warning-content bg-warning/5 border-0 text-warning text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Travel
            </span>
            <span className='btn no-animation hover:bg-accent hover:text-accent-content bg-accent/5 border-0 text-accent text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Programming
            </span>
            <span className='btn no-animation hover:bg-info hover:text-info-content bg-info/5 border-0 text-info text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #IA
            </span>
            <span className='btn no-animation hover:bg-error hover:text-error-content bg-error/5 border-0 text-error text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #reactjs
            </span>
            <span className='btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Technology
            </span>
            <span className='btn no-animation hover:bg-success hover:text-success-content bg-success/5 border-0 text-success text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Health
            </span>
            <span className='btn no-animation hover:bg-secondary hover:text-secondary-content bg-secondary/5 border-0 text-secondary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #LifeStyle
            </span>
            <span className='btn no-animation hover:bg-warning hover:text-warning-content bg-warning/5 border-0 text-warning text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Travel
            </span>
            <span className='btn no-animation hover:bg-accent hover:text-accent-content bg-accent/5 border-0 text-accent text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Programming
            </span>
            <span className='btn no-animation hover:bg-info hover:text-info-content bg-info/5 border-0 text-info text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #IA
            </span>
            <span className='btn no-animation hover:bg-error hover:text-error-content bg-error/5 border-0 text-error text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #reactjs
            </span>
            <span className='btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Technology
            </span>
            <span className='btn no-animation hover:bg-success hover:text-success-content bg-success/5 border-0 text-success text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Health
            </span>
            <span className='btn no-animation hover:bg-secondary hover:text-secondary-content bg-secondary/5 border-0 text-secondary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #LifeStyle
            </span>
            <span className='btn no-animation hover:bg-warning hover:text-warning-content bg-warning/5 border-0 text-warning text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Travel
            </span>
            <span className='btn no-animation hover:bg-accent hover:text-accent-content bg-accent/5 border-0 text-accent text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #Programming
            </span>
            <span className='btn no-animation hover:bg-info hover:text-info-content bg-info/5 border-0 text-info text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #IA
            </span>
            <span className='btn no-animation hover:bg-error hover:text-error-content bg-error/5 border-0 text-error text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium'>
              #reactjs
            </span>
          </div>
        </section>
      <section className='w-screen flex justify-center border-box overflow-x-hidden'>
        <div className="w-[90%]">
          <div className='flex items-center justify-between mb-8'>
            <h5 className='text-base-content text-2xl font-bold'>Trending Posts</h5>
            <NavLink path={'/tous-les-articles'} className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm' >VIEW ALL POSTS</NavLink>
          </div>
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className="card relative w-fit h-fit font-work">
              <div className="min-h-[320px]">
                <figure className="h-full max-w-full">
                  <Image width={320} height={320} src="/images/nature7.webp" alt="post-thumb" className='rounded-xl min-h-[320px] h-full object-cover' />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-10 p-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  <NavLink path={'/category'}>
                    <Badge color='warning' text='Photography'/>
                  </NavLink>
                  <NavLink path={'/category'}>
                    <Badge color='primary' text='Travel'/>
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink path={"/single-post"}>
                    <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                    6 Things You Must See Before Visiting Europe
                    </h2>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
            <div className="card relative w-fit h-fit font-work">
              <div className="min-h-[320px]">
                <figure className="h-full max-w-full">
                  <Image width={320} height={320} src="/images/nature7.webp" alt="post-thumb" className='rounded-xl min-h-[320px] h-full object-cover' />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-10 p-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  <NavLink path={'/category'}>
                    <Badge color='warning' text='Photography'/>
                  </NavLink>
                  <NavLink path={'/category'}>
                    <Badge color='primary' text='Travel'/>
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink path={"/single-post"}>
                    <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                    6 Things You Must See Before Visiting Europe
                    </h2>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
            <div className="card relative w-fit h-fit font-work">
              <div className="min-h-[320px]">
                <figure className="h-full max-w-full">
                  <Image width={320} height={320} src="/images/nature7.webp" alt="post-thumb" className='rounded-xl min-h-[320px] h-full object-cover' />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-10 p-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  <NavLink path={'/category'}>
                    <Badge color='warning' text='Photography'/>
                  </NavLink>
                  <NavLink path={'/category'}>
                    <Badge color='primary' text='Travel'/>
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink path={"/single-post"}>
                    <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                    6 Things You Must See Before Visiting Europe
                    </h2>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
            <div className="card relative w-fit h-fit font-work">
              <div className="min-h-[320px]">
                <figure className="h-full max-w-full">
                  <Image width={320} height={320} src="/images/nature7.webp" alt="post-thumb" className='rounded-xl min-h-[320px] h-full object-cover' />
                </figure>
              </div>
              <div className="card-body gap-0 absolute bottom-0 rounded-xl w-full z-10 p-6">
                <div className="flex flex-wrap items-center gap-1.5">
                  <NavLink path={'/category'}>
                    <Badge color='warning' text='Photography'/>
                  </NavLink>
                  <NavLink path={'/category'}>
                    <Badge color='primary' text='Travel'/>
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink path={"/single-post"}>
                    <h2 className="text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3">
                    6 Things You Must See Before Visiting Europe
                    </h2>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
              
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Posts

