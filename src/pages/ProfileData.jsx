import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const ProfileData = ({ profile }) => {
    const {user} = use(AuthContext)
    const loaderData = useLoaderData()
    const data = profile || loaderData
    const sendPartnerRequest = async() => {
        await axios.post('http://localhost:3000/partner-requests',
            {
                senderEmail: user.email, 
                receiverId: data._id
            }
        )
        .then((res) => {
                toast.success('Partner Request sent successfully')
                console.log(res)
            }
        )
        .catch((error)=> {
            toast.error(error.message)
        })
    }
    return (
        <div className='flex justify-center min-h-screen'>
            <div>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.time}</p>
                <p>{data.xpLevel}</p>
                <p>{data.location}</p>
            </div>
            <button className='btn btn-primary' onClick={sendPartnerRequest}>Send Partner Request</button>
        </div>
    );
};

export default ProfileData;