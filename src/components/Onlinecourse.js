import React from 'react'
import certif from '../assets/certif.png'
import wall from '../assets/wall.png'
import table from '../assets/table.png'

const Onlinecourse = () => {
  return (
    <div className='flex flex-col my-14'> 
        <div className='text-4xl font-bold text-justify px-8 py-12 text-[#3fba96]'>Manage Your Course</div>
        <div className='flex flex-row px-3'>
        <div className='flex flex-row border rounded-md shadow-sm p-6 hover:scale-110 duration-300 cursor-pointer'>
            <div><img src={wall} alt='' style={{width:120}}/></div>
            <div><p className='font-medium text-justify pt-10 '>Choose Your Time For Learning</p></div>
        </div>
        <div className='flex flex-row border rounded-md shadow-sm p-6 hover:scale-110 duration-300 cursor-pointer'>
            <div><img src={table} alt='' style={{width:120}}/></div>
            <div><p className='font-medium text-justify pt-10 '>Choose Your Favorite Course</p></div>
        </div>
        <div className='flex flex-row border rounded-md shadow-sm p-6 hover:scale-110 duration-300 cursor-pointer'>
            <div><img src={certif} alt='' style={{width:120}}/></div>
            <div><p className='font-medium text-justify pt-10 '>Download Your Certicate</p></div>
        </div>
        </div>
    </div>
  )
}

export default Onlinecourse