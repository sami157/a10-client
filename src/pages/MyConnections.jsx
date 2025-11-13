import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import toast from 'react-hot-toast'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyConnections = () => {
    const myRequests = useLoaderData();
    const { user, loading } = use(AuthContext)
    const [profiles, setProfiles] = useState([]);
    const [message, setMessage] = useState('')
    const editMessage = async (senderEmail, receiverId, message) => {
        try {
            const res = await axios.patch('http://localhost:3000/partner-requests', {
                senderEmail,
                receiverId,
                message
            });
            toast.success("Message updated!");
            console.log(res)
            return res.data;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update message");
        }
    };


    useEffect(() => {
        if (!Array.isArray(myRequests) || myRequests.length === 0) {
            setProfiles([]);
            return;
        }

        (async () => {
            const results = await Promise.all(
                myRequests.map((r) =>
                    axios
                        .get(`http://localhost:3000/study-partners/find/${r.receiverId}`)
                        .then(res => res.data)
                )
            );
            setProfiles(results);
        }
        )();
    }, [myRequests]);
    return (
        <div className="overflow-x-auto w-10/12 mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Study Details</th>
                        <th>Experience</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((p) => (
                        <tr key={p._id}>
                            {/* Name + avatar */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={
                                                    p.photoURL ||
                                                    "https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                }
                                                alt={p.name || "User avatar"}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{p.name || "Unknown"}</div>
                                        <div className="text-sm opacity-50">
                                            {p.location || "—"}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            {/* Study details */}
                            <td>
                                {p.studyMode || "—"}
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    {p.time || "No time set"}
                                </span>
                            </td>

                            {/* XP */}
                            <td>
                                {p.xpLevel ?? "—"}
                            </td>

                            {/* Action */}
                            <th className='flex gap-4'>
                                <button className="btn btn-primary rounded-full" onClick={() => document.getElementById('message_modal_edit').showModal()}>Edit</button>
                                {loading || (<dialog id="message_modal_edit" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Edit Message</h3>
                                        <p className="py-4">Click the Done button below to confirm, or Esc to cancel</p>
                                        <div className="">
                                            <form className='flex flex-col gap-2' method="dialog" onSubmit={() => editMessage(user.email, p._id, message)}>
                                                <textarea
                                                    className="textarea textarea-bordered w-full"
                                                    rows={4}
                                                    placeholder="Write something"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                                <button type='submit' className="btn mx-auto">Done</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>)}
                                <button className="btn btn-error btn-md rounded-full">Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyConnections;