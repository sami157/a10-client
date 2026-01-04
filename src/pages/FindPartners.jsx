import React, { useEffect, useState } from 'react';
import { useLoaderData, NavLink } from 'react-router';
import axios from 'axios';
import { FaRegStar } from "react-icons/fa";
import GridSkeleton from '../components/skeleton/GridSkeleton';
import { IoMdSearch } from "react-icons/io";
import { FaSort } from "react-icons/fa";

const FindPartners = () => {
  const dataArray = useLoaderData().data;
  const [pending, setPending] = useState(true)
  const [partners, setPartners] = useState(dataArray);
  const [subject, setSubject] = useState('');
  const [sortXp, setSortXp] = useState('');

  const fetchPartners = async () => {
    try {
      const res = await axios.get('https://a10-server-seven.vercel.app/study-partners', {
        params: {
          subject: subject || undefined,
          sortXp: sortXp || undefined,
        },
      });
      setPartners(res.data);
      setPending(false)
    } catch (err) {
      console.error('Error fetching study partners:', err);
    }
  };


  useEffect(() => {
    fetchPartners();
  }, [subject, sortXp]);

  return (
    <div className='w-11/12 mx-auto my-4'>
      <p className='title-font text-4xl text-center m-4'>Find Partners</p>
      {
        (
          <div>
            <div className='flex justify-between items-center mb-4'>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn px-4 py-2 rounded-xl bg-base-200"><span><FaSort /></span>Sort by Experience</div>
                <ul tabIndex="-1" className="dropdown-content rounded-xl menu bg-base-200 m-2 z-1 w-52 py-2 px-4">
                  <li>
                    <button onClick={() => setSortXp('desc')}>
                      Descending
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortXp('asc')}>
                      Ascending
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSortXp('')}>
                      Clear sort
                    </button>
                  </li>
                </ul>
              </div>
              <div className='py-1 px-4 bg-base-200 rounded-xl flex gap-2 items-center'>
                <IoMdSearch />
                <input
                  className='px-1 py-1 rounded-lg'
                  type="search"
                  placeholder="Search by Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
            {
              pending ? <GridSkeleton /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-10/12 md:w-11/12 mx-auto gap-6'>
                  {
                    partners.map((data) => (
                      <div key={data._id} className='flex text-center my-2 flex-col gap-4 justify-between items-center p-3 shadow-2xl shadow-accent/15 bg-[linear-gradient(120deg,#E0F2FE_0%,#FFFFFF_45%,#CFFAFE_100%) rounded-xl'>
                        <img loading='lazy' className='w-full h-80 rounded-lg object-cover' src={data.photoURL} alt="" />
                        <p className='title-font text-2xl'>{data.name}</p>
                        <div className='flex gap-4 items-center'>
                          <p className='bg-base-400 px-4 py-2 font-bold rounded-full'>{data.xpLevel}</p>
                          <div className='flex items-center gap-2 bg-base-400 rounded-full py-2 px-4'>
                            <FaRegStar />
                            <p>{data.rating}</p>
                          </div>
                        </div>
                        <p>{`Subject: ${data.subject}`}</p>
                        <p>{`Mode: ${data.studyMode}`}</p>
                        <NavLink className='w-full' to={`/partner-profile/${data._id}`}>
                          <p className='hover:bg-base-100 bg-base-300 px-4 py-2 text-lg font-extrabold rounded-full'>
                            View Profile
                          </p>
                        </NavLink>
                      </div>
                    ))
                  }
                </div>
            }
          </div>
        )
      }
    </div>
  )
};

export default FindPartners;
