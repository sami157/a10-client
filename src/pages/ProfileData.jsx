import React from 'react';

const ProfileData = ({ profile }) => {
    console.log(profile)
    return (
        <div className='flex justify-center min-h-screen'>
            <div>
                <p>{profile.data.name}</p>
                <p>{profile.data.email}</p>
                <p>{profile.data.time}</p>
                <p>{profile.data.xpLevel}</p>
                <p>{profile.data.location}</p>
            </div>
        </div>
    );
};

export default ProfileData;