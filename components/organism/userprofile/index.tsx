import { auth } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'

const UserStatusComponent = async () => {
  const session = await auth()
  console.log(session)
  
  return (
    <div>
        {session?.user ? (<p>{session?.user?.name}</p>) : (<>
        <Link href={'/login'} className="btn btn-primary mr-2">Se Connecter</Link>
        <Link href={'/register'} className="btn btn-primary">S'inscrire</Link>
        </>) }
    </div>
  )
}

export default UserStatusComponent