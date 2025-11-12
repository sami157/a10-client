import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import FormSkeleton from './skeleton/FormSkeleton';
import axios from 'axios';
import toast from 'react-hot-toast';

const PartnerProfileForm = () => {
    const { user, loading } = use(AuthContext)
    const createProfile = async (event) => {
        event.preventDefault()
        const form = event.target
        const partnerProfile = {
            email: form.email.value,
            name: form.name.value,
            photoURL: form.photoURL.value,
            studyMode: form.studyMode.value,
            time: form.time.value,
            location: form.location.value,
            xpLevel: form.xpLevel.value,
            rating: +(Math.random() * (5 - 3.5) + 3.5).toFixed(1),
            partnerCount: 0,
        };
        await axios.post("http://localhost:3000/study-partners", partnerProfile)
        .then(() => {
            toast.success('User Profile Created')
        })
        .catch((error) => {
            toast.error(error.message)
        })



    }
    return (
        loading ? <FormSkeleton></FormSkeleton> :
            <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
                <h1 className="text-5xl font-bold title-font text-center">Create Partner Profile</h1>
                <div className="flex flex-col bg-white/50 backdrop-blur-xl drop-shadow-2xl w-[92vw] md:w-[400px] p-8 rounded-xl">
                    <form onSubmit={createProfile} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' disabled={true} type="email" defaultValue={user.email} className="input w-full rounded-lg border-0" />
                        <label className="label">Name</label>
                        <input name='name' type='text' required className="input w-full border-0 rounded-lg" placeholder="" />
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type='text' className="input w-full border-0 rounded-lg" placeholder="" />
                        <label className="label">Subject</label>
                        <select name='subject' required className="select w-full border-0 rounded-lg">
                            <option disabled={true}>Subject</option>
                            <option>English</option>
                            <option>Math</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                            <option>ICT</option>
                        </select>
                        <label className="label">Study Mode</label>
                        <select name='studyMode' required className="select w-full border-0 rounded-lg">
                            <option disabled={true}>Study Mode</option>
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                        <label className="label">Availability Time</label>
                        <input name='time' required type='text' className="input w-full border-0 rounded-lg" placeholder="" />
                        <label className="label">Location</label>
                        <input name='location' required type='text' className="input w-full border-0 rounded-lg" placeholder="" />
                        <label className="label">Experience Level</label>
                        <select name='xpLevel' required className="select w-full border-0 rounded-lg">
                            <option disabled={true}>Experience Level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                            <option>Professional</option>
                        </select>
                        <button type='submit' className="btn btn-neutral text-white bg-none mt-3 rounded-lg shadow-none">Create Partner Profile</button>
                    </form>
                </div>
            </div>
    );
};

export default PartnerProfileForm;