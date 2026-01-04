import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { PiStar } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const ProfileData = ({ profile }) => {
    const { user, loading } = use(AuthContext)
    const [message, setMessage] = useState('')
    const loaderData = useLoaderData()
    const data = profile || loaderData
    const [numRequest, setNumRequest] = useState(data.partnerCount)
    const sendPartnerRequest = async () => {
        await axios.post('https://a10-server-seven.vercel.app/partner-requests',
            {
                senderEmail: user.email,
                receiverId: data._id,
                message
            }
        )
            .then(() => {
                toast.success('Partner Request sent successfully')
                setNumRequest(numRequest + 1)
            }
            )
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div className='flex p-4 flex-col gap-4 justify-center items-center min-h-screen'>
            <img loading='lazy' className='w-dvw md:w-auto md:h-120 object-cover rounded-2xl' src={data.photoURL} alt="" />
            <div className='flex md:flex-row flex-col gap-2 items-center md:gap-8'>
                <p className='title-font text-4xl text-center'>{data.name}</p>
                <div className='flex gap-2 items-center'>
                    <PiStar className='text-4xl' />
                    <p className='text-2xl'>{data.rating}</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6'>
                <div className='text-xl flex gap-2 items-center'>
                    <MdOutlineMail className='text-3xl' />
                    <p>{data.email}</p>
                </div>
                <div className='text-xl flex gap-2 items-center'>
                    <SlCalender className='text-2xl' />
                    <p>{data.time}</p>
                </div>
                <div className='text-xl flex gap-2 items-center'>
                    <SlLocationPin className='text-2xl' />
                    <p>{data.location}</p>
                </div>
            </div>
            <p className='text-xl'>Number of Requests: <span>{numRequest}</span></p>
            <div className='flex flex-col gap-4 md:w-2/5'>
                <p className='text-3xl w-full rounded-xl py-4 bg-base-300/50 text-center'>{`Subject: `}<span className='font-extrabold'>{data.subject}</span></p>
                <p className='text-3xl w-full rounded-xl py-4 bg-base-300/50 text-center'>{`Experience Level: `}<span className='font-extrabold'>{data.xpLevel}</span></p>
            </div>
            {
                user?.email === data?.email ? null : 
                    !user || loading ? <Link className='link link-hover' to='/login'>Please Login to send partner request</Link> :
                    <div className=''>
                        <button className="bg-base-300/70 cursor-pointer px-4 font-bold hover:bg-base-300 py-2 rounded-full" onClick={() => document.getElementById('message_modal').showModal()}>Send Partner Request</button>
                    </div>}
            <dialog id="message_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add a Message with Your Request (Optional)</h3>
                    <p className="py-4">Click the button below to send partner request, or press Esc to cancel</p>
                    <div className="">
                        <form className='flex flex-col gap-2' onSubmit={sendPartnerRequest} method="dialog">
                            <textarea
                                className="textarea textarea-bordered rounded-lg w-full"
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