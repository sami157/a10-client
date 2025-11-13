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
        <div>
            {
                profiles.map(
                    (profile) => (
                        <p>{profile.name}</p>
                    )
                )
            }
        </div>
    );
};

export default MyConnections;