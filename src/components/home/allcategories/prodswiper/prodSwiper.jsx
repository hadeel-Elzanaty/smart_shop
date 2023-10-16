import React, { useEffect } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useDispatch,useSelector } from 'react-redux';
import { fetchProds } from '../../../../store/productSlice';
import { Link } from 'react-router-dom';
import SingleProduct from '../../../shared/singleProduct/singleProduct';
import { SliderNavBtn } from '../sliderBtns/sliderNavBtn';



const ProdSwiper = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data)
    useEffect(()=>{
        dispatch(fetchProds())
    },[dispatch])
    useEffect(()=>{
       console.log(products[1])
    },[products])

    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            //navigation


            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
           
            {
              products.map((product) =>
                 
                    <SwiperSlide key={product.id} >
                          
                        <SingleProduct id = {product.id} img = {product.image} category={product.category} />
                        
                    </SwiperSlide>
                 
                   

                )
            }
        
            <SliderNavBtn />

        </Swiper>
    )
}

export default ProdSwiper