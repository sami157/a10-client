import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            initials: "AR",
            name: "Aisha Rahman",
            role: "HSC Student",
            text: "StudyMate matched me with someone who studies at the exact same pace as me. We've been meeting three times a week, and my consistency has never been better. Honestly, I wish I found this platform earlier!",
            gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]",
            quoteColor: "text-[var(--color-primary)]",
        },
        {
            initials: "FH",
            name: "Farhan Hossain",
            role: "University Student",
            text: "I was struggling to stay motivated studying alone. My study partner keeps me accountable and we push each other to do better. My grades have improved so much this semester!",
            gradient: "from-[var(--color-secondary)] to-[var(--color-accent)]",
            quoteColor: "text-[var(--color-secondary)]",
        },
        {
            initials: "TI",
            name: "Tasnia Islam",
            role: "A-Level Student",
            text: "Finding someone with the same exam goals made all the difference. We share resources, quiz each other, and celebrate our wins together. Best decision I made for my studies!",
            gradient: "from-[var(--color-accent)] to-[var(--color-primary)]",
            quoteColor: "text-[var(--color-accent)]",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6 mb-20 px-5 w-full md:max-w-10/12 lg:w-4/5 mx-auto">
            {reviews.map((review, index) => (
                <div key={index} className="flex-1 relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 bg-linear-to-r ${review.gradient}`}></div>

                    {/* Card */}
                    <div className="relative bg-base-300 p-8 rounded-xl flex flex-col h-full">
                        <div className={`text-6xl mb-4 ${review.quoteColor}`}>"</div>
                        <p className="text-base-content/90 mb-6 leading-relaxed flex-1">{review.text}</p>

                        <div className="flex items-center gap-3 mt-auto">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-linear-to-br ${review.gradient}`}>
                                {review.initials}
                            </div>
                            <div>
                                <p className="font-semibold text-base-content">{review.name}</p>
                                <p className="text-sm text-base-content/60">{review.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
