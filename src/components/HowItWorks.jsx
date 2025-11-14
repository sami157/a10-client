import React from 'react';
import { NavLink } from 'react-router'
const HowItWorks = () => {
    return (
        <div>
            <div className="hero mb-4 rounded-sm bg-base-200/60">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Study & Stay Consistent</h1>
                        <p className="py-6">
                            Once connected, decide on a schedule, pick topics, and keep each other accountable.
                            Your partnerCount and rating grow as you gain experience together.
                        </p>
                        <NavLink className='rounded-full btn bg-blue-200 px-4 py-2'><p className='text-blue-600'>Get Started</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;