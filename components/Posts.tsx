'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Card, Button, Navbar, Menu, Dropdown } from 'react-daisyui'
import Link from 'next/link'
import Badge from './Badge'

const Posts = () => {
  useEffect(() => {
    console.log(window.innerWidth)
  }, [])

  return (
    <>
      <section className='w-screen flex justify-center border-box overflow-x-hidden' > 
        <div className="w-[96%] flex flex-col md:flex-row gap-5 ">
          <div className="w-full md:w-6/12">
            <Card imageFull className='min-h-[320px] h-[calc(100%)]'>
              <Card.Image src="/images/nature5.webp" alt="Shoes" />
              <Card.Body className='bottom-0'>
                <div className="flex gap-2">
                  <Badge color='primary' text='Travel' />
                  <Badge color='success' text='Adventure' />
                </div>
                <Card.Title>
                  <h3>
                    <Link href={'/blog'} className='text-neutral-content text-justify font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition hover:duration-500'>
                      Visit un alpines mountains, adventures and green houses. Come on to enjoy holidays!
                    </Link>
                  </h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='w-full md:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <Card imageFull className='min-h-[320px]'>
              <Card.Image src="/images/nature3.jpg" alt="Shoes" />
              <Card.Body className='bottom-0'>
                <div className="flex gap-2">
                  <Badge color='success' text='Health'/>
                  <Badge color='info' text='Personnal Finance'/>
                </div>
                <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">The Ultimate Guide to Healthy eating on a budget</Card.Title>
              </Card.Body>
            </Card>
          
            <Card imageFull className='min-h-[320px]'>
              <Card.Image src="/images/nature7.webp" alt="Shoes" />
              <Card.Body className='bottom-0'>
                <div className="flex gap-2">
                  <Badge color='warning' text='Photography'/>
                  <Badge color='primary' text='Travel'/>
                </div>
                <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Mastering Photography: Tips and Techniques for </Card.Title>
              </Card.Body>
            </Card>
          
            <Card imageFull className='min-h-[320px]'>
              <Card.Image src="/images/nature5.webp" alt="Shoes" />
              <Card.Body className='bottom-0'>
                <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Shoes!</Card.Title>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </Card.Body>
            </Card>
          
            <Card imageFull className='min-h-[320px]'>
              <Card.Image src="/images/nature4.webp" alt="Shoes" />
              <Card.Body className='bottom-0'>
                <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Shoes!</Card.Title>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </Card.Body>
            </Card>
          </div>
        </div>  
      </section>
      <section className='py-10 w-screen flex justify-center border-box overflow-x-hidden' > 
          <div className="w-[96%] gap-4 flex justify-center items-center border-gray-500 border rounded-xl px-6 py-4 flex-wrap ">
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
        <div className="w-[96%]">
          <div className='flex items-center justify-between mb-8'>
            <h5 className='text-base-content text-2xl font-bold'>Trending Posts</h5>
            <Link href={'/tous-les-articles'} className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm' >Voir tout</Link>
          </div>
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              <Card imageFull className='min-h-[320px]'>
                  <Card.Image src="/images/nature7.webp" alt="Shoes" />
                  <Card.Body className='bottom-0'>
                    <div className="flex gap-2">
                        <Badge color='warning' text='Photography'/>
                        <Badge color='primary' text='Travel'/>
                    </div>
                    <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Mastering Photography: Tips and Techniques for </Card.Title>
                  </Card.Body>
              </Card>
              <Card imageFull className='min-h-[320px]'>
                  <Card.Image src="/images/nature7.webp" alt="Shoes" />
                  <Card.Body className='bottom-0'>
                    <div className="flex gap-2">
                        <Badge color='warning' text='Photography'/>
                        <Badge color='primary' text='Travel'/>
                    </div>
                    <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Mastering Photography: Tips and Techniques for </Card.Title>
                  </Card.Body>
              </Card>
              <Card imageFull className='min-h-[320px]'>
                <Card.Image src="/images/nature7.webp" alt="Shoes" />
                <Card.Body className='bottom-0'>
                  <div className="flex gap-2">
                      <Badge color='warning' text='Photography'/>
                      <Badge color='primary' text='Travel'/>
                  </div>
                  <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Mastering Photography: Tips and Techniques for </Card.Title>
                </Card.Body>
              </Card>
              <Card imageFull className='min-h-[320px]'>
                <Card.Image src="/images/nature7.webp" alt="Shoes" />
                <Card.Body className='bottom-0'>
                  <div className="flex gap-2">
                      <Badge color='warning' text='Photography'/>
                      <Badge color='primary' text='Travel'/>
                  </div>
                  <Card.Title className="h-[90px] flex flex-col justify-start items-start" tag="h2">Mastering Photography: Tips and Techniques for </Card.Title>
                </Card.Body>
              </Card>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Posts

