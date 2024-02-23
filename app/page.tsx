'use client'

import Badge from '@/components/Badge'
import Posts from '@/components/Posts'
import Advertisement from '@/components/organism/advertisement/Advertisement'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="min-h-screen my-5 container">
        <Posts/>
        <section className="py-10 w-screen flex justify-center overflow-x-hidden">
          <div className="w-[96%]">
            <div className="font-work flex items-center justify-between mb-8">
              <h5 className="text-base-content text-2xl font-bold">For You</h5>
              <Link className="btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm" href={"/all-posts"} >
                View all post
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item: any) => (
                <div className="card">
                  <div className="card-body p-4 border border-base-content/10 rounded-xl w-fit">
                    <div className="flex items-center justify-center gap-4 font-work">
                      <figure className="flex-none">
                        <Link href={'/single-post'}>
                          <Image
                            width={110}
                            height={190}
                            alt='Post image'
                            className='rounded-md'
                            src={"/blog1.png"}
                          />
                        </Link>
                      </figure>
                      <div>
                        <h5>
                          <Link className='font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300 line-clam-2' href={"/single-post"} >
                            The Ultimate Guide To Planning a Trip Aboard
                          </Link>
                        </h5>
                        <p className="mt-2.5 text-base-content/60 text-sm">
                          Dec 27, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </section>
        <section className='py-10 w-screen flex justify-center'>
          <div className="w-[96%] flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-8">
            {/*HEADER*/}
            <div className="font-work flex items-center justify-between mb-8">
              <h5 className="text-base-content text-2xl font-bold">Weekly Post</h5>
              <Link href={"/tous-les-articles"} className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm'>
                View all Posts
              </Link>
            </div>

            {/*HEADER*/}
            <div className="w-full">
              <div className="card relative font-work max-h-[450px]">
                <figure>
                  <Image
                    width={1216}
                    height={450}
                    alt='Post Image'
                    className='rounded-xl w-full object-cover text-transparent '
                    src={"/blog2.png"}
                  />
                </figure>
                <div className="card-body p-2 md:p-10 absolute bottom-0 w-full z-20">
                  <Link href="/category">
                    <Badge color='primary' text='Travel' />
                  </Link>
                  <h3>
                    <Link href={"/single-post"} className='text-neutral-content font-semibold text-xl line-clam-3 md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500'>
                    The Ultimate Guide to Planning a Trip Abroad
                    </Link>
                  </h3>
                  <div className='mt-3 md:mt-6 flex items-center gap-5 text-neutral-content'>
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-9 rounded-full">
                          <Image
                            width={100}
                            height={100}
                            alt='author'
                            src={'/avatar.png'}
                            className='text-transparent'
                          />
                        </div>
                      </div>
                      <h5>
                        <Link href={"/author"} className='text-xs md:text-base font-medium hover:text-primary transition hover:duration-300'>
                          Evan Bacon
                        </Link>
                      </h5>
                    </div>
                    <p className='text-xs md:text-base'>Dec 27, 2022</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  {[1, 2, 3, 4, 5, 6].map((item: any) => (
                      <div className="card">
                        <div className="card-body p-4 border border-base-content/10 rounded-xl w-fit">
                          <div className="flex items-center justify-center gap-4 font-work">
                            <figure className="flex-none">
                              <Link href={'/single-post'}>
                                <Image
                                  width={110}
                                  height={190}
                                  alt='Post image'
                                  className='rounded-md'
                                  src={"/blog1.png"}
                                />
                              </Link>
                            </figure>
                            <div>
                              <h5>
                                <Link className='font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300 line-clam-2' href={"/single-post"} >
                                  The Ultimate Guide To Planning a Trip Aboard
                                </Link>
                              </h5>
                              <p className="mt-2.5 text-base-content/60 text-sm">
                                Dec 27, 2022
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
              </div>
            </div>
            <Advertisement/>
            <div className="font-work flex items-center justify-between mb-8">
                <h5 className='text-base-content text-2xl font-bold'>Latest Post</h5>
                <Link href={"/tous-les-posts"} className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm'>
                  view all posts
                </Link>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="card relative font-work max-h-[406px]">
                    <figure>
                      <Image
                        width={1216}
                        height={406}
                        alt='Post image'
                        className='rounded-xl w-full object-cover min-h-[406px]'
                        src={'/image1.png'}
                      />
                    </figure>
                    <div className="card-body p-2 md:p-6 absolute bottom-0 w-full z-20">
                      <Link href="/category">
                        <Badge color='primary' text='Travel' />
                      </Link>
                      <h3>
                        <Link href={"/single-post"} className='text-neutral-content font-semibold text-xl line-clam-3 md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500'>
                        The Ultimate Guide to Planning a Trip Abroad
                        </Link>
                      </h3>
                      <div className='mt-3 md:mt-6 flex items-center gap-5 text-neutral-content'>
                        <div className=" flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-9 rounded-full">
                              <Image
                                width={100}
                                height={100}
                                alt='author'
                                src={'/avatar.png'}
                                className='text-transparent'
                              />
                            </div>
                          </div>
                          <h5>
                            <Link href={"/author"} className='text-xs md:text-base font-medium hover:text-primary transition hover:duration-300'>
                              Evan Bacon
                            </Link>
                          </h5>
                        </div>
                        <p className='text-xs md:text-base'>Dec 27, 2022</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                  <div className="card relative font-work max-h-[406px]">
                    <figure>
                      <Image
                        width={1216}
                        height={406}
                        alt='Post image'
                        className='rounded-xl w-full object-cover min-h-[406px]'
                        src={'/image1.png'}
                      />
                    </figure>
                    <div className="card-body p-2 md:p-6 absolute bottom-0 w-full z-20">
                      <Link href="/category">
                        <Badge color='primary' text='Travel' />
                      </Link>
                      <h3>
                        <Link href={"/single-post"} className='text-neutral-content font-semibold text-xl line-clam-3 md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500'>
                        The Ultimate Guide to Planning a Trip Abroad
                        </Link>
                      </h3>
                      <div className='mt-3 md:mt-6 flex items-center gap-5 text-neutral-content'>
                        <div className=" flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-9 rounded-full">
                              <Image
                                width={100}
                                height={100}
                                alt='author'
                                src={'/avatar.png'}
                                className='text-transparent'
                              />
                            </div>
                          </div>
                          <h5>
                            <Link href={"/author"} className='text-xs md:text-base font-medium hover:text-primary transition hover:duration-300'>
                              Evan Bacon
                            </Link>
                          </h5>
                        </div>
                        <p className='text-xs md:text-base'>Dec 27, 2022</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  {[1, 2, 3, 4, 5, 6].map((item: any) => (
                      <div className="card">
                        <div className="card-body p-4 border border-base-content/10 rounded-xl w-fit">
                          <div className="flex items-center justify-center gap-4 font-work">
                            <figure className="flex-none">
                              <Link href={'/single-post'}>
                                <Image
                                  width={110}
                                  height={190}
                                  alt='Post image'
                                  className='rounded-md'
                                  src={"/blog1.png"}
                                />
                              </Link>
                            </figure>
                            <div>
                              <h5>
                                <Link className='font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300 line-clam-2' href={"/single-post"} >
                                  The Ultimate Guide To Planning a Trip Aboard
                                </Link>
                              </h5>
                              <p className="mt-2.5 text-base-content/60 text-sm">
                                Dec 27, 2022
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
            </div>
            <Advertisement/>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 justify-center order-last lg:order-none">
                <div className="p-8 border border-base-content/10 rounded-xl w-full">
                  <h5 className="text-base-content font-bold text-2xl font-work">
                    Latest Post
                  </h5>
                  <div className="grid grid-cols-1 gap-6 mt-8">
                  {[1, 2, 3, 4, 5, 6].map((item: any) => (
                    <div className='card'>
                        <div className="card-body p-0">
                          <div className="flex items-center gap-4 font-work">
                            <figure className="flex-none">
                              <Link href="/single-post">
                                <Image
                                  width={110}
                                  height={190}
                                  className='rounded-md text-transparent'
                                  alt='post image'
                                  src={'/blog2.png'}
                                />
                              </Link>
                            </figure>
                            <div>
                              <h5>
                                <Link href="/single-post" className='font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300'>
                                The Ultimate Guide to Planning a Trip Abroad
                                </Link>
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
                      <Link href="/category" className='text-base font-medium text-base-content text-opacity-70 capitalize hover:text-primary transition ease-in-out duration-300'>
                        Technology
                      </Link>
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
      </section>
      </main>
    </>
  )
}
