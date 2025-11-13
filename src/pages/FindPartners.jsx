import React from 'react'
import { useLoaderData } from 'react-router'

const FindPartners = () => {
  const dataArray = useLoaderData().data
  return (
    <div>
      {
        dataArray.map(
          (data) => (
            <p>{data.name}</p>
        )
        )
      }
    </div>
  )
}

export default FindPartners
