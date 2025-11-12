import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import UserAvatar from '../components/UserAvatar';
import ProfileSkeleton from '../components/skeleton/ProfileSkeleton';

const UserProfile = () => {
    const {user, loading} = use(AuthContext)
    return (
        loading ? <ProfileSkeleton/> :
        <div>
            <div className='flex flex-col gap-6 h-screen my-20'>
                <p className='text-[50px] text-center title-font'>User Profile</p>
                <div className='flex flex-col gap-5 items-center mx-auto p-10 duration-500 ease-in-out justify-center rounded-xl bg-white/35 backdrop-blur-xl'>
                    <div className='flex flex-col gap-5 items-center'>
                        {<UserAvatar small={false}></UserAvatar>}
                        <div className='flex flex-col items-center gap-3'>
                            <div>
                                <p className='title-font text-center'>Name</p>
                                <p className=''>{user?.displayName}</p>
                            </div>
                            <div>
                                <p className='title-font text-center'>Email</p>
                                <p className=''>{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;