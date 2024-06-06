import React, { useState } from "react";
// import { Select } from "react-daisyui";
import Select from 'react-select';


export default function MultipleSelect({ options }:{ options:string[] }){
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const opts = e.target.options
    for (let i = 0; i < opts.length; i++) {
      if(opts[i].selected){
        setSelectedOptions((prev)=>([...prev,opts[i].value]))
      }  
    }
  }
// Code TSX du sélecteur multiple avec les options
  return (
    <div>
       <Select
        isMulti
        name="categories"
        options={options}
        className='basic-multi-select w-[52vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] px-4 py-1 rounded-md outline-none text-base-content placeholder:text-base bg-base-100 focus:border-black'
        classNamePrefix="select"
      />
      {/* <p className="mt-2">{selectedOptions.join(', ')}</p> */}
    </div>
  )
}

