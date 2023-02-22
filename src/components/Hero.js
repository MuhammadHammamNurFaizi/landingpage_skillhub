import React, { useEffect } from 'react'
import gambar1 from '../assets/gambar1.png'
import Aos from 'aos';
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
  return (
    <div data-aos="fade-up" className='flex flex-row justify-around mt-32'>
        <div className=''>
            <p className='text-3xl text-[#3fba96] font-medium pt-7'>Grow yourself with us</p>
            <p className='text-7xl font-bold pt-7'>Grow your skill &</p>
            <p className='text-7xl font-bold pt-7'>get world class</p>
            <p className='text-7xl font-bold pt-7'>job's</p>
            <p className='text-2xl font-thin pt-7'>Non-disclosure agreement seed round seed 
                money accelerator influencer. Growth hacking return nondis 
                sure agreement seed round seed .</p>
            <label className='block flex-row pt-7'>
                <input type="search" className='form-search px-16 py-4' placeholder='Search course title'/>
                <span className='text-center px-14 border rounded-md bg-[#3fba96] py-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Search</span>
            </label>
        </div>
        <div className='align-middle'>
            <img src={gambar1} alt='gambarhero' style={{width:950}}/>
        </div>
    </div>
  )
}

export default Hero
