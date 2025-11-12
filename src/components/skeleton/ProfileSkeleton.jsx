import React from 'react';

const ProfileSkeleton = () => {
    return (
        <div className='flex justify-center p-20'>
            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-20 w-full rounded-full"></div>
                <div className="skeleton h-10 w-full rounded-xl"></div>
                <div className="skeleton h-10 w-full rounded-xl"></div>
                <div className="skeleton h-10 w-full rounded-xl"></div>
            </div>
        </div>
    );
};

export default ProfileSkeleton;