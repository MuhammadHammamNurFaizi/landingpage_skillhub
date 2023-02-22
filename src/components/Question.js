import React, {useEffect} from 'react'
import gambar4 from '../assets/gambar4.png'
import Aos from 'aos';
import "aos/dist/aos.css"

const Question = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
  return (
    <div className='flex flex-row py-28'>
        <div data-aos='fade-up'>
            <img src={gambar4} alt ='' style={{width:400}} />
        </div>
        <div>
            <p className='text-7xl font-semibold text-center'>Do you have any query?</p>
            <p data-aos='fade-left' className='text-2xl font-normal py-10 text-center'>Non-disclosure agreement seed.</p>
            <label data-aos='fade-left' className='block flex-row pt-7 text-center'>
                <input type="search" className='form-search px-20 py-4' placeholder='Do you have any query?'/>
                <span className='text-center px-14 border rounded-md bg-[#3fba96] py-4 text-white hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'>Search</span>
            </label>
        </div>
    </div>
  )
}

export default Question