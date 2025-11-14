import React from 'react';
import { useLoaderData } from 'react-router'
import { NavLink } from 'react-router'

const Home = () => {
    const topProfiles = useLoaderData().data
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-10'>
                {
                    topProfiles.map(
                        (profile) => (
                            <div key={profile._id}>
                                <p>{profile.name}</p>
                                <NavLink to={`/partner-profile/${profile._id}`}><p className='hover:bg-gray-100'>View Profile</p></NavLink>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Home;