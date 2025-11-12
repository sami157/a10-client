import React from 'react'
import { use } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import UserAvatar from '../components/UserAvatar'

const Navbar = () => {
  const { user } = use(AuthContext)
  return (
    <div className='px-4 py-2 flex justify-between items-center bg-gray-100 sticky'>
      <div className='flex gap-4'>
        <p>Logo</p>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Find Partners</NavLink>
      </div>
      <div className='flex gap-4 items-center'>
        {user ? <UserAvatar small={true}></UserAvatar> : null}
        {user ? <NavLink to='/partner-profile'>Create Partner Profile</NavLink> : <NavLink className='btn-ghost' to='/register'>Register</NavLink>}
        {user ? <p>My Connections</p> :<NavLink className='btn-ghost' to='/login'>Login</NavLink>}
      </div>
    </div>
  )
}

export default Navbar
