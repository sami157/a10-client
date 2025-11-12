import React from 'react';

const ProfileData = ({ profile }) => {
    console.log(profile)
    return (
        <div className='flex justify-center min-h-screen'>
            <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.time}</p>
                <p>{profile.xpLevel}</p>
                <p>{profile.location}</p>
            </div>
        </div>
    );
};

export default ProfileData;