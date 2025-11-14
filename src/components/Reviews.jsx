import React from 'react';

const Reviews = () => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='title-font text-3xl text-center'>Customer Reviews</p>
            <div className='flex w-8/10 mx-auto justify-center items-center flex-col md:flex-row gap-10 mb-6'>
            <div className="indicator">
                <div className='indicator-item indicator-bottom indicator-center badge badge-secondary'>
                    <p>Aisha Rahman,</p>
                    <p>HSC Student</p>
                </div>
                <div className="bg-base-300 grid p-6 rounded-lg w-100 place-items-center">“StudyMate matched me with someone who studies at the exact same pace as me. We’ve been meeting three times a week, and my consistency has never been better. Honestly, I wish I found this platform earlier!”</div>
            </div>
            <div className="indicator">
                <div className='indicator-item indicator-bottom indicator-center badge badge-secondary'>
                    <p>Aisha Rahman,</p>
                    <p>HSC Student</p>
                </div>
                <div className="bg-base-300 grid p-6 rounded-lg w-100 place-items-center">“StudyMate matched me with someone who studies at the exact same pace as me. We’ve been meeting three times a week, and my consistency has never been better. Honestly, I wish I found this platform earlier!”</div>
            </div>
            <div className="indicator">
                <div className='indicator-item indicator-bottom indicator-center badge badge-secondary'>
                    <p>Aisha Rahman,</p>
                    <p>HSC Student</p>
                </div>
                <div className="bg-base-300 grid p-6 rounded-lg w-100 place-items-center">“StudyMate matched me with someone who studies at the exact same pace as me. We’ve been meeting three times a week, and my consistency has never been better. Honestly, I wish I found this platform earlier!”</div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;