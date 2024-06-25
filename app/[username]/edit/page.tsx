import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const EditProfilePage = async ({ params }: { params:{ username:string } }) => {
  const session = await auth()
  //@ts-ignore
  if(session?.user?.username !== params.username ) redirect(`/${params.username}`)
  return (
    <div className='mt-[73.83px]'>EditProfilePage</div>
  )
}

export default EditProfilePage