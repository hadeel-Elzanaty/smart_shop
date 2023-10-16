import React from 'react'
import {  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "../brands/styles/brands.scss";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../../../assets/images/brand 1.png"
import img2 from "../../../assets/images/brand 2.png"
import img3 from "../../../assets/images/brand 3.png"
import img4 from "../../../assets/images/brand 4.png"
import img5 from "../../../assets/images/brand 5.png"
import img6 from "../../../assets/images/brand 6.png"

export const Brands = () => {
    return (
        <div className='brand'>
            <h4 className='brandAddress  text-center'>
                البراندات
            </h4>
            <Swiper
                // install Swiper modules
                modules={[ A11y]}
                spaceBetween={50}
                slidesPerView={6}
              //  navigation
               // pagination={{ clickable: true }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={img6} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>

    );
}
