import React from 'react';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Logo = () => {
    return (
        <div className='flex gap-1 items-center'>
            <div className='text-5xl'>
                <MdOutlineScreenSearchDesktop />
            </div>
            <div className='flex title-font flex-col -(gap-4)'>
                <p className='title-font'>Study</p>
                <p className='font-extrabold title-font text-2xl'>Mate</p>
            </div>
        </div>
    );
};

export default Logo;