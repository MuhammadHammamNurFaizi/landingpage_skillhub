import React from 'react'
import mentor1 from '../assets/mentor1.png'
const Introduction = () => {
  return (
    <div className='flex flex-row justify-between my-7'>
        <div className='pr-6'>
            <img src={mentor1} alt='' style={{width:950}}/>
        </div>
        <div className='text-6xl text-[#3fba96] font-medium pt-7 text-left mx-6 py-8'>About Us
        <p className='text-2xl font-normal text-slate-700 py-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
        
    </div>
  )
}

export default Introduction