import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router'

const UserAvatar = ({ small }) => {
    const { auth, signOutUser } = use(AuthContext)
    const photo = auth.currentUser.providerData[0].photoURL
    return (
        small ?
            (
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="m-1">
                        <div>
                            {photo ? <img title={auth.currentUser.displayName} className='w-6 h-6 object-cover rounded-full transition-all ease-in-out link-hover duration-250 hover:scale-120' src={photo} alt="profile picture" /> : <FaUser className='text-[30px]' />}
                        </div>
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <NavLink to='/profile'>Profile</NavLink>
                        </li>
                        <li>
                            <button onClick={signOutUser}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )
            :
            <div>
                {photo ? <img title={auth.currentUser.displayName} className='w-[200px] h-[200px] object-cover rounded-full transition-all ease-in-out link-hover duration-250 hover:scale-120' src={photo} alt="profile picture" /> : <FaUser className='text-[200px]' />}
            </div>
    );
};

export default UserAvatar;