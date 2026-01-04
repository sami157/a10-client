import React from 'react';
import Carousel from './Carousel';

const HydrateFallback = () => {
    return (
        <div className='flex text-center items-center flex-col gap-6 p-20'>
            <span className="shimmer scale-200 loading loading-dots loading-xl"></span>
        </div>
    );
};

export default HydrateFallback;