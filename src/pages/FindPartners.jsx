import React, { useEffect, useState } from 'react';
import { useLoaderData, NavLink } from 'react-router';
import axios from 'axios';

const FindPartners = () => {
  const dataArray = useLoaderData().data;

  const [partners, setPartners] = useState(dataArray);
  const [subject, setSubject] = useState('');
  const [sortXp, setSortXp] = useState('');

  const fetchPartners = async () => {
    try {
      const res = await axios.get('http://localhost:3000/study-partners', {
        params: {
          subject: subject || undefined,
          sortXp: sortXp || undefined,
        },
      });
      setPartners(res.data);
    } catch (err) {
      console.error('Error fetching study partners:', err);
    }
  };


  useEffect(() => {
    fetchPartners();
  }, [subject, sortXp]);

  return (
    <div className='w-11/12 mx-auto my-4'>
      <div className='flex justify-between mb-4'>
        <details className="dropdown">
          <summary className="m-1 btn">Sort by Experience</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
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
        </details>

        {/* Search input */}
        <div>
          <label className="input rounded-full flex items-center gap-2">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search by Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className='grid grid-cols-3 w-10/12 mx-auto gap-6'>
        {
          partners.map((data) => (
            <div key={data._id} className='flex flex-col gap-4 justify-between items-center'>
              <p>{data.name}</p>
              <p>{data.subject}</p>
              <p>{data.xpLevel}</p>
              <NavLink to={`/partner-profile/${data._id}`}>
                <p className='hover:bg-gray-200 bg-gray-100 px-3 py-1 rounded'>
                  View Profile
                </p>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FindPartners;
