import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"


const Growth = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
  return (
    <div className='flex flex-col justify-between'>
        <div className='text-7xl font-semibold text-center'>
            <p>How We Growth?</p>
        </div>
        <div className='flex flex-col justify-center'>
        <div data-aos="fade-right" className='w-2/4 h-auto border p-4 rounded-lg shadow-md my-12 justify-center'>
            <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
            <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p></div>
        <div data-aos="fade-left" className='justify-end border p-4 rounded-lg shadow-md my-12 shrink w-2/4 h-auto object-right'>
            <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
            <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p></div>
        <div data-aos="fade-right" className='shrink w-2/4 h-auto border p-4 rounded-lg shadow-md my-12'>
            <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
            <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p></div>
        <div data-aos="fade-left"   className='shrink w-2/4 h-auto border p-4 rounded-lg shadow-md my-12'>
            <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
            <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p></div>
        <div data-aos="fade-right" className='shrink w-2/4 h-auto border p-4 rounded-lg shadow-md my-12'>
            <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
            <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p></div>
        </div>
    </div>
  )
}

export default Growth