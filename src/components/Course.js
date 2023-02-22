import React, {useEffect} from 'react'
import illustration from '../assets/illustration.jpg'
import uiux from '../assets/uiux.jpg'
import web from '../assets/web.jpeg'
import Aos from 'aos';
import "aos/dist/aos.css"

const Course = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
  return (
    <div className='flex flex-col pb-20'>
        <div className=''>
            <p className='text-7xl font-semibold text-center'>Our popular courses</p>
            <p className='text-2xl font-normal py-10 text-center'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
        </div>
        <div data-aos='flip-up' className='flex flex-row'>
            <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                <p className='text-2xl py-5'>Graphic design course</p>
                <p className='text-slate-700'>25K Students</p>
            </div>
            <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                <img src={illustration} alt='course1' style={{width:350}} className='rounded-md' />
                <p className='text-2xl py-5'>Illustration design course</p>
                <p className='text-slate-700'>25K Students</p>
            </div>
            <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                <img src={uiux} alt='course1' style={{width:350}} className='rounded-md' />
                <p className='text-2xl py-5'>UI/UX design course</p>
                <p className='text-slate-700'>25K Students</p>
            </div>
            <div className='border p-6 rounded-md m-3 shadow-md hover:scale-110 duration-300 cursor-pointer'>
                <img src={web} alt='course1' style={{width:350}} className='rounded-md' />
                <p className='text-2xl py-5'>Web development course</p>
                <p className='text-slate-700'>25K Students</p>
            </div>
            
        </div>
    </div>
  )
}

export default Course