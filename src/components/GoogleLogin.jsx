import React from 'react'
import googleLogo from '../assets/google.png'

const GoogleLogin = ({onClickAction}) => {
  return (
    <div onClick={onClickAction} className='flex mx-auto justify-center gap-2 bg-white/50 max-h-[40px] px-[20px] py-[10px] rounded-full items-center hover:scale-110 ease-in-out duration-500 backdrop-blur-2xl'>
      <img className='w-[20px] h-[20px]' src={googleLogo} alt="" />
      <p className='font-semibold'>Continue with Google</p>
    </div>
  )
}

export default GoogleLogin
