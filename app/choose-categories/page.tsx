"use client"

import { categories } from '@/lib/data/categoriesData'
import React, { useState } from 'react'
import { Button } from 'react-daisyui'
import { IoMdCheckmark } from 'react-icons/io'

function ChosingFollowingCategoriesPage(){
  const [choosen, setChoosen] = useState<string[]>([])  
//   const [clicked, setIsClicked] = useState<boolean>(false) 

  const handleClick = (text:string)=>{
    if(choosen.includes(text)){
        setChoosen((prev)=> prev.filter(elt => elt !== text))

    }else{
        setChoosen((prev) => [...prev, text])
    }
  }

  return (
    <section className='w-screen py-16 flex justify-center border-box overflow-x-hidden'>
    <div className="w-[90%]">
      <h2 className='w-full text-base-content text-left text-[40px] mb-5 font-bold'>Catégories d'articles que vous aimerez suivre</h2>
      <div className="w-full gap-4 flex justify-between items-center rounded-xl py-4 flex-wrap mb-5">
        {categories.map((elt,i) => (
            <span onClick={() => handleClick(elt.value)} key={i} className={`btn no-animation hover:bg-primary hover:text-primary-content border-0 text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium ${choosen.includes(elt.value) ? 'bg-primary text-primary-content' : 'bg-primary/5 text-primary' } `}>
                {choosen.includes(elt.value) && ( <IoMdCheckmark size={14} className='text-white mr-[5px]'/> )} {elt.value}
            </span> 
           ) 
        )}
      </div>
      <Button color="primary">Envoyez</Button>
    </div></section>
  )
}

export default ChosingFollowingCategoriesPage