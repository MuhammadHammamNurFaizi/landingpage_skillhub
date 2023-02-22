import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

const Timeline = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
    <div>
    <div>
        <div className='text-7xl font-semibold text-center mb-6 pb-9'>
            <p>How We Growth?</p>
    </div></div>
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li data-aos="fade-right" class="mb-10 ml-8">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
        <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p></li>
                <li data-aos="fade-right" class="mb-10 ml-8">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
        <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p></li>
                <li data-aos="fade-right" class="mb-10 ml-8">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
        <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p></li>
                <li data-aos="fade-right" class="mb-10 ml-8">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
        <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p></li>
                <li data-aos="fade-right" class="mb-10 ml-8">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <p className='text-[#3fba96] text-2xl'>Lorem Ipsum</p>
        <p className='text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p></li>

</ol>

    </div>
  )
}

export default Timeline