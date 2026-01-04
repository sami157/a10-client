import React from 'react';

const FormSkeleton = () => {
    return (
        <div className='flex min-h-screen items-center justify-center p-2'>
            <div className="flex w-11/12 p-8 bg-base-200/50 rounded-xl md:w-100 mx-auto flex-col gap-4">
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-3 w-1/3"></div>
                <div className="skeleton h-10 w-full"></div>
            </div>
        </div>
    );
};

export default FormSkeleton;