import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const header = () => {
  return (
    <div className='flex flex-row justify-center cursor-pointer'>
        <div className='py-5'><img src={logo} alt="logoskillhub" /></div>
        <div className='flex'>
            <li className='flex'>
                <ul className='my-5 py-3 px-10 text-2xl font-thin hover:text-[#3fba96]'><Link to='/about'>About Us </Link></ul>
                <ul className='my-5 py-3 px-10 text-2xl font-thin hover:text-[#3fba96]'><Link to='/couses'>Courses</Link></ul>
                <ul className='my-5 py-3 px-10 text-2xl font-thin hover:text-[#3fba96]'>Online Learning</ul>
                <ul className='my-5 py-3 px-10 text-2xl border text-white bg-[#3fba96] rounded-md hover:bg-white hover:text-[#3fba96] hover:border-[#3fba96]'><Link to='/login'>Log In</Link></ul>
            </li>    
        </div>
    </div>
  )
}

export default header