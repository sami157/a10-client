import React from 'react';
import { useLoaderData } from 'react-router'
import { NavLink } from 'react-router'
import Carousel from '../components/Carousel';
import { FaRegStar } from "react-icons/fa";
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    const topProfiles = useLoaderData().data
    return (
        <div className='flex flex-col gap-4 px-4'>
            <Carousel></Carousel>
            <div className='flex flex-col gap-4'>
                <p className='title-font text-3xl text-center'>Top Partners</p>
                <div className='grid grid-cols-1 md:grid-cols-3 md:w-8/12 mx-auto gap-6'>
                    {
                        topProfiles.map(
                            (data) => (
                                <div key={data._id} className='flex text-center my-2 flex-col gap-4 justify-between items-center p-3 shadow-2xl shadow-accent/15 bg-[linear-gradient(120deg,#E0F2FE_0%,#FFFFFF_45%,#CFFAFE_100%) rounded-xl'>
                                    <img className='w-full h-80 rounded-lg object-cover' src={data.photoURL} alt="" />
                                    <p className='title-font text-2xl'>{data.name}</p>
                                    <div className='flex gap-4 items-center'>
                                        <p className='bg-white px-4 py-2 font-bold rounded-full'>{data.xpLevel}</p>
                                        <div className='flex items-center gap-2 bg-white rounded-full py-2 px-4'>
                                            <FaRegStar />
                                            <p>{data.rating}</p>
                                        </div>
                                    </div>
                                    <p>{`Subject: ${data.subject}`}</p>
                                    <p>{`Mode: ${data.studyMode}`}</p>
                                    <NavLink className='w-full' to={`/partner-profile/${data._id}`}>
                                        <p className='hover:bg-gray-200 bg-base-300 px-4 py-2 text-lg font-extrabold rounded-full'>
                                            View Profile
                                        </p>
                                    </NavLink>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <HowItWorks/>
        </div>
    );
};

export default Home;