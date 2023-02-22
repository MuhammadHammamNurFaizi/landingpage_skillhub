import React, {useEffect} from 'react'
import gambar3 from '../assets/gambar3.png'
import Aos from 'aos';
import "aos/dist/aos.css"

const Works = () => {
    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <div className='flex flex-col justify-center pb-28'>
        <div >
            <p className='text-7xl font-semibold text-center'>How it works</p>
            <p className='text-2xl font-normal py-10 text-center'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div data-aos='fade-up' data-aos-duration='1000' className='border py-7 px-5 rounded-xl my-7 shadow-lg'>
                    <p className='text-2xl font-bold pb-5'>Select a course</p>
                    <p className='text-2xl font-normal text-slate-700'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
                </div>
                <div data-aos='fade-up' data-aos-duration='2000' className='border py-7 px-5 rounded-xl my-7 shadow-lg'>
                    <p className='text-2xl font-bold pb-5'>Fill it up & give payment</p>
                    <p className='text-2xl font-normal text-slate-700'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
                </div>
                <div data-aos='fade-up' data-aos-duration='3000' className='border py-7 px-5 rounded-xl my-7 shadow-lg'>
                    <p className='text-2xl font-bold pb-5'>Start build yourself</p>
                    <p className='text-2xl font-normal text-slate-700'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
                </div>
            </div>
            <div data-aos='fade-left' data-aos-duration='2000' >
                <img src={gambar3} alt="gambar3" style={{width:800}}/>
            </div>
        </div>
    </div>
  )
}

export default Works