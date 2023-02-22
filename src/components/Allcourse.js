import React from 'react'
import web from '../assets/web.jpeg'
import illustration from '../assets/illustration.jpg'
import uiux from '../assets/uiux.jpg'
import next from '../assets/next.png'
const Allcourse = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
        <div><p className='text-3xl font-medium py-5'>Recommendation Course</p></div>
            <div className='flex flex-row'>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>Graphic design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>Graphic design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>Graphic design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>Graphic design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='py-28 hover:scale-110 duration-300 cursor-pointer'>
                    <img src={next} style={{width:70}} />
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
        <div><p className='text-3xl font-medium py-5'>Popular for Advence Web Design</p></div>
            <div className='flex flex-row'>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={uiux} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>UI/UX Design Course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={uiux} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>UI/UX Design Course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={uiux} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>UI/UX Design Course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={uiux} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>UI/UX Design Course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='py-28 hover:scale-110 duration-300 cursor-pointer'>
                    <img src={next} style={{width:70}} />
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
        <div><p className='text-3xl font-medium py-5'>Popular for Advance Design</p></div>
            <div className='flex flex-row'>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={illustration} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>illustration design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={illustration} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>illustration design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={illustration} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>illustration design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                    <img src={illustration} alt='course1' style={{width:350}} className='rounded-md' />
                    <p className='text-2xl py-5'>illustration design course</p>
                    <p className='text-slate-700 pb-3'>25K Students</p>
                    <p className='text-center border rounded-md bg-[#3fba96] p-3 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Buy</p>
                </div>
                <div className='py-28 hover:scale-110 duration-300 cursor-pointer'>
                    <img src={next} style={{width:70}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Allcourse