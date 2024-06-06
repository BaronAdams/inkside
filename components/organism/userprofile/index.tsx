import NavLink from '@/components/NavLink'
import { auth } from '@/lib/auth'
import React from 'react'

const UserStatusComponent = async () => {
  const session = await auth()
  console.log(session)
  
  return (
    <div>
        {session?.user ? (<p>{session?.user?.name}</p>) : (<>
        <NavLink path={'/login'} className="btn btn-primary mr-2">Se Connecter</NavLink>
        <NavLink path={'/register'} className="btn btn-primary">S'inscrire</NavLink>
        </>) }
    </div>
  )
}

export default UserStatusComponent