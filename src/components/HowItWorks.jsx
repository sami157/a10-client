import React from 'react';
import { NavLink } from 'react-router'
const HowItWorks = () => {
    return (
        <div className='my-10'>
            <div className="hero mb-4 rounded-sm bg-base-200/60">
                <div className="md:hero-content text-center">
                    <div className="flex flex-col md:text-center text-justify p-4 gap-4 md:w-3/5">
                        <h1 className="text-3xl md:text-4xl title-font text-center font-bold">How StudyMate Works</h1>
                        <p>
                            Create a profile, discover learners who match your goals, and start studying together
                            on a schedule that actually works for you.
                        </p>
                        <p>
                            Add your subjects, preferred study mode (Online, In-Person, Hybrid), time
                            availability, and experience level so others can find the right match in you. Use filters to search by subject, XP level, and location. View profiles, then send
                            a short message with your partner request to connect.
                        </p>
                        <p>
                            Once connected, decide on a schedule, pick topics, and keep each other accountable.
                            Your partnerCount and rating grow as you gain experience together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;