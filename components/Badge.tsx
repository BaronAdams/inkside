import React from 'react'

const Badge = ( { color, text } : { color : string, text: string } ) => {
  return (
    <div className={`w-fit text-${color} text-${color}-content no-animation px-2.5 py-1 bg-${color} text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium z-0 capitalize
    `}>
        {text}
    </div>
  )
}

export default Badge
//Lien élevé
// text-lg font-semibold line-clam-3 text-neutral-content hover:text-primary transition hover:duration-300 line-clamp-3

//Badge
//w-fit text-warning-content no-animation px-2.5 py-1 bg-warning text-xs md:text-sm rounded-md mb-2 md:mb-4 font-medium z-0 capitalize 

//Lien nomal
// font-work line-clam-2 font-semibold text-base text-base-content leading-5 hover:text-primary transition hover:duration-300 line-clam-2