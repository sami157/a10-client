import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import UserAvatar from '../components/UserAvatar';
import ProfileSkeleton from '../components/skeleton/ProfileSkeleton';

const UserProfile = () => {
    const {user, loading} = use(AuthContext)
    return (
        loading ? <ProfileSkeleton/> :
        user ? 
        (
            <div>
            <div className='flex flex-col text-center gap-6 h-screen my-20'>
                <p className='text-[50px] text-center title-font'>User Profile</p>
                <div className='flex flex-col gap-5 items-center mx-auto p-10 duration-500 ease-in-out justify-center rounded-xl bg-base-400/35 backdrop-blur-xl'>
                    <div className='flex flex-col bg-base-200 rounded-2xl p-8 gap-5 items-center'>
                        {<UserAvatar small={false}></UserAvatar>}
                        <div className='flex flex-col items-center gap-3'>
                            <div>
                                <p className='title-font text-xl text-center'>Name</p>
                                <p className=''>{user?.displayName}</p>
                            </div>
                            <div>
                                <p className='title-font text-xl text-center'>Email</p>
                                <p className=''>{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : null
    );
};

export default UserProfile;