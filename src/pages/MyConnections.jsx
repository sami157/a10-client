import React from 'react';
import { useLoaderData} from 'react-router'

const MyConnections = () => {
    const myRequests = useLoaderData()
    console.log(myRequests)
    return (
        <div>
            My Connections
        </div>
    );
};

export default MyConnections;