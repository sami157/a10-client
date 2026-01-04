import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router'
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const UserAvatar = ({ small }) => {
    const navigate = useNavigate()
    const { user, signOutUser } = use(AuthContext)
    const photo = user.photoURL
    const handleSignOut = () => {
        signOutUser().then(() => navigate('/'))
    }
    return (
        small ?
            (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1 hover:scale-110 cursor-pointer flex gap-2 items-center text-xl transition-all ease-in-out duration-250">
                        <div className=''>
                            {photo ? <img title={user.displayName} className='w-6 h-6 object-cover rounded-full' src={photo} alt="profile picture" /> : <FaUser className='text-[30px]' />}
                        </div>
                        <IoIosArrowDropdownCircle />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <button onClick={handleSignOut}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )
            :
            <div>
                {photo ? <img title={user.displayName} className='w-[200px] h-[200px] object-cover rounded-full transition-all ease-in-out link-hover duration-250 hover:scale-120' src={photo} alt="profile picture" /> : <FaUser className='text-[200px]' />}
            </div>
    );
};

export default UserAvatar;