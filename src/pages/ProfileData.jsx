import React from 'react';
import { useLoaderData } from 'react-router'

const ProfileData = ({ profile }) => {
    const loaderData = useLoaderData()
    const data = profile || loaderData
    return (
        <div className='flex justify-center min-h-screen'>
            <div>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.time}</p>
                <p>{data.xpLevel}</p>
                <p>{data.location}</p>
            </div>
        </div>
    );
};

export default ProfileData;