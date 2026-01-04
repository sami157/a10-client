import React from 'react';

const GridSkeleton = () => {
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center md:w-11/12 lg:w-10/12 mx-auto'>
             <div className="skeleton h-100 rounded-2xl"></div>
             <div className="skeleton h-100 rounded-2xl"></div>
             <div className="skeleton h-100 rounded-2xl"></div>
             <div className="skeleton h-100 rounded-2xl"></div>
             <div className="skeleton h-100 rounded-2xl"></div>
             <div className="skeleton h-100 rounded-2xl"></div>
        </div>
    );
};

export default GridSkeleton;