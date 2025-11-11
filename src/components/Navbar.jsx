import React from 'react'
import { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
  const { user } = use(AuthContext)
  console.log(user)
  return (
    <div className='px-4 py-2 flex justify-between bg-gray-100'>
      <div className='flex gap-4'>
        <p>Logo</p>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Find Partners</NavLink>
      </div>
      <div className='flex gap-4'>
        {user ? <p>Create Partner Profile</p> : <NavLink className='btn-ghost' to='/register'>Register</NavLink>}
        {user ? <p>My Connections</p> :<NavLink className='btn-ghost' to='/login'>Login</NavLink>}
      </div>
    </div>
  )
}

export default Navbar
