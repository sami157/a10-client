import React from 'react'
import { useLoaderData, NavLink } from 'react-router'

const FindPartners = () => {
  const dataArray = useLoaderData().data
  return (
    <div className='grid grid-cols-3 w-10/12 mx-auto gap-6'>
      {
        dataArray.map(
          (data) => (
            <div className='flex flex-col gap-4 justify-between items-center'>
              <p>{data.name}</p>
              <NavLink to={`/partner-profile/${data._id}`}><p className='hover:bg-gray-200 bg-gray-100'>View Profile</p></NavLink>
            </div>
          )
        )
      }
    </div>
  )
}

export default FindPartners
