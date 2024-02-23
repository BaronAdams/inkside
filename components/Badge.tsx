import React from 'react'

const Badge = ( { color, text } : { color : string, text: string } ) => {
  return (
    <div className={`w-fit text-${color}-content px-2.5 py-1 bg-${color} text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium`}>
        {text}
    </div>
  )
}

export default Badge