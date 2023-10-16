import React from 'react'
import { useSwiper } from 'swiper/react';
import {AiOutlineArrowRight} from "react-icons/ai";
import "../sliderBtns/styles/sliderNavBtns.scss";
export const SliderNavBtn = () => {
    const swiper =useSwiper()
  return (
    <div className='sliderBtns'>
        <button className='nextbtn' onClick={()=> swiper.slideNext()}>
        <AiOutlineArrowRight/></button>
        <button className='prevbtn' onClick={()=> swiper.slidePrev()}>
          <AiOutlineArrowRight/>
        </button>
        
    </div>
  )
}
