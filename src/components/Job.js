import React,{useEffect} from 'react'
import gamber2 from '../assets/gamber2.png'
import Aos from 'aos';
import "aos/dist/aos.css"
const Job = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
}, []);
  return (
    <div className='flex flex-row justify-center py-28'>
        <div data-aos="fade-right">
            <img src={gamber2} alt='gambarjob' style={{width:800}}/>
        </div>
        <div>
            <p className='text-7xl font-semibold'>Over 1M+ Students get’s job</p>
            <div data-aos='fade-up'> 
            <p className='text-2xl font-normal py-10'>Non-disclosure agreement seed round seed money accelerator influencer. 
                Growth hacking return nondis sure .</p>
            <p className='text-2xl font-normal py-8'>Non-disclosure agreement seed round seed money accelerator influencer.</p>
            <button className='text-2xl border py-3 px-10 bg-[#3fba96] text-white rounded-md hover:bg-white hover:text-[#3fba96]'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Job