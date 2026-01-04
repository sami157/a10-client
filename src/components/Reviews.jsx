import React from 'react';

const Reviews = () => {
    return (
        <div className='flex flex-cols md:flex-row gap-4 py-20 px-5 lg:w-7/10 mx-auto'>
            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-base-300 p-8 rounded-xl border border-purple-500/20">
                    <div className="text-6xl text-purple-500 mb-4">"</div>
                    <p className="text-base-content/90 mb-6 leading-relaxed">StudyMate matched me with someone who studies at the exact same pace as me. We've been meeting three times a week, and my consistency has never been better. Honestly, I wish I found this platform earlier!</p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">AR</div>
                        <div>
                            <p className="font-semibold text-base-content">Aisha Rahman</p>
                            <p className="text-sm text-base-content/60">HSC Student</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-base-300 p-8 rounded-xl border border-cyan-500/20">
                    <div className="text-6xl text-cyan-500 mb-4">"</div>
                    <p className="text-base-content/90 mb-6 leading-relaxed">I was struggling to stay motivated studying alone. My study partner keeps me accountable and we push each other to do better. My grades have improved so much this semester!</p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">FH</div>
                        <div>
                            <p className="font-semibold text-base-content">Farhan Hossain</p>
                            <p className="text-sm text-base-content/60">University Student</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-red-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-base-300 p-8 rounded-xl border border-orange-500/20">
                    <div className="text-6xl text-orange-500 mb-4">"</div>
                    <p className="text-base-content/90 mb-6 leading-relaxed">Finding someone with the same exam goals made all the difference. We share resources, quiz each other, and celebrate our wins together. Best decision I made for my studies!</p>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg">TI</div>
                        <div>
                            <p className="font-semibold text-base-content">Tasnia Islam</p>
                            <p className="text-sm text-base-content/60">A-Level Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;