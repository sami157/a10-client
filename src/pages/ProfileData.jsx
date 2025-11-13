import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ProfileData = ({ profile }) => {
    const { user } = use(AuthContext)
    const [message, setMessage] = useState('')
    const loaderData = useLoaderData()
    const data = profile || loaderData
    const sendPartnerRequest = async () => {
        await axios.post('http://localhost:3000/partner-requests',
            {
                senderEmail: user.email,
                receiverId: data._id,
                message
            }
        )
            .then(() => {
                toast.success('Partner Request sent successfully')
            }
            )
            .catch((error) => {
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
            <button className="btn" onClick={() => document.getElementById('message_modal').showModal()}>open modal</button>
            <dialog id="message_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add a Message with Your Request (Optional)</h3>
                    <p className="py-4">Click the button below to send partner request</p>
                    <div className="">
                        <form className='flex flex-col gap-2' onSubmit={sendPartnerRequest} method="dialog">
                            <textarea
                                className="textarea textarea-bordered w-full"
                                rows={4}
                                placeholder="Write something"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type='submit' className="btn mx-auto shrink">Send</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ProfileData;