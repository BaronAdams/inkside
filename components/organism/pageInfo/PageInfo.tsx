import NavLink from '@/components/NavLink'
import React from 'react'
/**
 * Our PageInfo is a reusable UI component that used to represent pge title and breadcrumbs section.
 *
 * @property page title as heading, previous all pages navigation link.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PageInfo = () => {
   return (
      <div className="py-4 bg-base-100 text-center font-work">
         <h1 className="text-base-content text-3xl font-semibold">
            Page Title
         </h1>
         <div className="text-base breadcrumbs text-base-content/80 font-work mt-2 flex items-center justify-center">
            <ul>
               <li>
                  <NavLink
                     path={`/`}
                     className="hover:text-primary transition hover:duration-300 font-medium text-base"
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <span className="text-base-content/60 font-normal text-base">
                     Link One
                  </span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default PageInfo
