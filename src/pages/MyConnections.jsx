import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import toast from 'react-hot-toast'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const MyConnections = () => {
    const myRequests = useLoaderData();
    const [requests, setRequests] = useState(myRequests)
    const { user, loading } = use(AuthContext)
    const [profiles, setProfiles] = useState([]);
    const [message, setMessage] = useState('')
    const editMessage = async (senderEmail, receiverId, message) => {
        if (message) {
            try {
                const res = await axios.patch('http://localhost:3000/partner-requests', {
                    senderEmail,
                    receiverId,
                    message
                });
                toast.success("Message updated!");
                return res.data;
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to update message");
            }
        }
        else toast.error("Empty Message!");
    }
    const deleteRequest = async (senderEmail, receiverId) => {
        try {
            await axios.delete("http://localhost:3000/partner-requests", {
                data: {
                    senderEmail,
                    receiverId
                }
            });
            toast.success("Request deleted");
            setRequests(
                requests.filter(req =>
                    !(req.senderEmail === senderEmail && req.receiverId === receiverId)
                )
            );
        } catch (err) {
            toast.error(err.response?.data?.message || "Delete failed");
        }
    };

    const showDeletePopup = (id) => {
        toast((t) => (
            <div className='flex flex-col gap-4 bg-base-100'>
                <p>Delete Partner Request?</p>
                <div className='flex justify-between items-center'>
                    <button className='text-green-500 font-bold px-4 py-2 rounded-full bg-green-100' onClick={() => toast.dismiss(t.id)}>
                        Cancel
                    </button>
                    <button className='text-red-500 font-bold px-4 py-2 rounded-full bg-red-100' onClick={() => {
                        deleteRequest(user.email, id)
                        toast.dismiss(t.id)
                    }
                    }>
                        Delete
                    </button>
                </div>

            </div>
        ), {
            duration: 6000
        });
    }

    useEffect(() => {
        if (!Array.isArray(requests) || requests.length === 0) {
            setProfiles([]);
            return;
        }

        (async () => {
            const results = await Promise.all(
                requests.map((r) =>
                    axios
                        .get(`http://localhost:3000/study-partners/find/${r.receiverId}`)
                        .then(res => res.data)
                )
            );
            setProfiles(results);
        }
        )();
    }, [requests]);
    return (
        <>
            <p className='text-center title-font text-3xl my-4'>My Connections</p>
            <div className="w-full flex justify-center my-6">
                <div className="w-11/12 flex flex-col gap-4 md:w-10/12 lg:w-8/12 overflow-x-auto">
                    {
                        requests.length === 0 ? (
                            <div className='flex flex-col gap-4'>
                                <p className='text-center md:text-xl'>You haven't sent any requests yet.</p>
                                <DotLottieReact
                                    src="https://lottie.host/3d3bf29d-4afe-4010-b58a-9618df5e0e0c/32c3qQekG9.lottie"
                                    loop
                                    autoplay
                                />
                            </div>
                        ) :
                            (
                                <table className="table w-full text-center">
                                    <thead>
                                        <tr className="align-middle">
                                            <th>Name</th>
                                            <th>Study Details</th>
                                            <th>Experience</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {profiles.map((p) => (
                                            <tr key={p._id} className="hover">
                                                <td>
                                                    <div className="flex items-center justify-start gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-circle h-12 w-12">
                                                                <img
                                                                    src={
                                                                        p.photoURL ||
                                                                        "https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                    }
                                                                    alt={p.name || "User avatar"}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="font-bold">{p.name || "Unknown"}</div>
                                                            <div className="text-sm opacity-50">
                                                                {p.location || "—"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <span>{p.studyMode || "—"}</span>
                                                        <span className="px-4 py-2 bg-base-300 rounded-lg">
                                                            {p.time || "No time set"}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Experience */}
                                                <td>
                                                    <span className="font-semibold">
                                                        {p.xpLevel ?? "—"}
                                                    </span>
                                                </td>

                                                {/* Actions */}
                                                <td>
                                                    <div className="flex items-center justify-center gap-3">
                                                        <button
                                                            className="text-blue-500 font-bold px-4 py-1 rounded-full bg-blue-100"
                                                            onClick={() =>
                                                                document
                                                                    .getElementById(`message_modal_edit_${p._id}`)
                                                                    .showModal()
                                                            }
                                                        >
                                                            Edit
                                                        </button>

                                                        {loading || (
                                                            <>
                                                                <dialog
                                                                    id={`message_modal_edit_${p._id}`}
                                                                    className="modal"
                                                                >
                                                                    <div className="modal-box">
                                                                        <h3 className="font-bold text-lg">Edit Message</h3>
                                                                        <p className="py-2 text-sm">
                                                                            Update your message and click Done to save.
                                                                        </p>

                                                                        <form
                                                                            className="flex flex-col gap-3 mt-2"
                                                                            method="dialog"
                                                                            onSubmit={() =>
                                                                                editMessage(user.email, p._id, message)
                                                                            }
                                                                        >
                                                                            <textarea
                                                                                className="textarea textarea-bordered w-full"
                                                                                rows={4}
                                                                                placeholder="Write something"
                                                                                value={message}
                                                                                onChange={(e) => setMessage(e.target.value)}
                                                                            />
                                                                            <div className="flex justify-end gap-2">
                                                                                <button
                                                                                    type="button"
                                                                                    className="hover:bg-base-300 px-4 py-2 rounded-full"
                                                                                    onClick={() =>
                                                                                        document
                                                                                            .getElementById(
                                                                                                `message_modal_edit_${p._id}`
                                                                                            )
                                                                                            .close()
                                                                                    }
                                                                                >
                                                                                    Cancel
                                                                                </button>
                                                                                <button
                                                                                    type="submit"
                                                                                    className="text-green-500 font-bold px-4 py-2 rounded-full bg-green-100"
                                                                                >
                                                                                    Done
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </dialog>
                                                                <button
                                                                    onClick={() => showDeletePopup(p._id)}
                                                                    className="text-red-500 font-bold px-4 py-1 rounded-full bg-red-100"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>)
                    }

                </div>
            </div>
        </>

    );
};

export default MyConnections;