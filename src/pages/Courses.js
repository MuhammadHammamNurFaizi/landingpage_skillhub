import React from 'react'
import Allcourse from '../components/Allcourse'
import Carausel from '../components/Carausel'
import Header from '../components/Header'
import Onlinecourse from '../components/Onlinecourse'

const Courses = () => {
  return (
    <div>
        <Header />
        <Carausel />
        <Onlinecourse />
        <Allcourse />
    </div>
  )
}

export default Courses