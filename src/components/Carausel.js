import React from 'react'
import Slider from "react-slick";
import teach1 from '../assets/teach1.png'
import teach2 from '../assets/teach2.png'
import teach3 from '../assets/teach3.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carausel = () => {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
    };
  return (
    <div>
        <Slider {...settings}>
        <div className='px-4'><img src={teach1}/></div>
        <div><img src={teach2}/></div>
        <div><img src={teach3}/></div>   
        </Slider>
    </div>
  )
}

export default Carausel