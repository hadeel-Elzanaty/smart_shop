
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./styles/styles.css";

import "./styles/swiperprod.scss"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProds } from '../../../store/productSlice';
const SwiperProd = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.data)
    useEffect(() => {
        dispatch(fetchProds())
    }, [dispatch])

    useEffect(() => {
        console.log(products[1])
    }, [products])

    return (
        < >
            <div className='mainswiper'>

                <div ></div>
                <Swiper

                    loop={true}
                    spaceBetween={10}

                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {
                        products.map((pro) =>
                            <SwiperSlide>
                                <Link to= {`/prods/${pro.id}`}  key ={pro.id}>
                                <img src={pro.image} alt='' />

                                </Link>
                            </SwiperSlide>)
                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper"
                >
                    
                    {
                        products.map((pro) =>
                            <SwiperSlide key={pro.id}>
                                       <Link to= {`/prods/${pro.id}`}  >
                                       <img src={pro.image} alt='' />
                                       </Link>
                             
                            </SwiperSlide>)
                    }   
                </Swiper>

            </div>


        </>
    );
}





export default SwiperProd;