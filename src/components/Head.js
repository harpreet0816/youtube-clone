import React from 'react'

export const Head = () => {
  return (
<div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex gap-20 col-span-1'>
    <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png" alt="icon" />
    <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="icon" />
    </div>
    <div className='col-span-10 text-center'>
    <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" name="search" id="search" />
    <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-200' type="button">🔍</button>
    </div>
    <div className='col-span-1'>
    <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="user" />
    </div>
    </div>
  )
}
