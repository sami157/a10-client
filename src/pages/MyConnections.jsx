import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const MyConnections = () => {
    const myRequests = useLoaderData();
    const [profiles, setProfiles] = useState([]);

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
        })();
    }, [myRequests]);
    return (
        <div className="overflow-x-auto w-10/12 mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Study Details</th>
                        <th>XP Level</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {profiles.map((p) => (
                        <tr key={p._id || p.id || p.email}>
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
                            <td>{p.xpLevel ?? "—"}</td>

                            {/* Action */}
                            <th className='flex gap-4'>
                                <button className="btn btn-primary btn-md rounded-full">Edit</button>
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