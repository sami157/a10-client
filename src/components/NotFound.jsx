import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router'
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='md:w-8/12 justify-center flex flex-col gap-4 items-center'>
                <DotLottieReact
                    src="https://lottie.host/075f5d33-a5c3-4277-94f4-0505c9aef459/b4qmKZtfv2.lottie"
                    loop
                    autoplay
                />
                <Link to='/' className='bg-blue-200 md:px-8 rounded-full px-4 py-2 md:text-2xl font-bold md:py-4'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;