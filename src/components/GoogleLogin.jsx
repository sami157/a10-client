import React from 'react'
import googleLogo from '../assets/google.png'

const GoogleLogin = ({onClickAction}) => {
  return (
    <button onClick={onClickAction} className='flex mx-auto justify-center gap-2 bg-base-300/50 max-h-10 px-5 py-2.5 rounded-full items-center hover:border ease-in-out duration-200 cursor-pointer'>
      <img className='w-5 h-5' src={googleLogo} alt="Google sign-in button" />
      <p className='font-semibold'>Continue with Google</p>
    </button>
  )
}

export default GoogleLogin
