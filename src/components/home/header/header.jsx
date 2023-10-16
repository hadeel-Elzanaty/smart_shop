import React from 'react';


import "../header/styles/header.css"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


import img1 from "../../../assets/images/smart shop 1.jpeg";
import img2 from "../../../assets/images/Untitled design (5) 1.png";
const Header = () => {



    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}

            pagination={{ clickable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>

                <div className='slide'>
             
                    <div className='brand-imgdiv'>
                    <img src={img1}  alt='' />
                        < svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="450" height="400" viewBox="0 0 622 472" fill="none">
                            <path d="M83.2841 6.56474C217.631 -28.821 580.688 98.2371 616.074 232.584C651.459 366.931 492.334 341.846 357.987 377.232C223.64 412.618 81.2626 548.149 45.8769 413.802C10.4911 279.455 -51.0626 41.9505 83.2841 6.56474Z" fill="#93CADE" fillOpacity="0.3" />
                        </svg>
                        <svg className="svg1"width="400" height="420" viewBox="0 0 461 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.21051 458.514C0.21051 319.468 215.464 0.477966 354.338 0.477966C493.211 0.477966 428.45 148.091 428.45 287.137C428.45 426.183 523.209 598.531 384.335 598.531C245.462 598.531 0.21051 597.561 0.21051 458.514Z" fill="#93CADE" fillOpacity="0.3" />
                        </svg>

                       
                    </div>
                    <div className='brand-content'>

                        <p>براندات نسائي عالمية</p>
                        <h4>
                            احدث أدوات النساء
                        </h4>
                        <p>براندات نسائي عالمية</p>
                        <button>
                            <Link to="/">اكتشف الآن </Link>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                
            <div className='slide'>
             
             <div className='brand-imgdiv'>
             <img src={img2}  alt='' />
                 < svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="450" height="400" viewBox="0 0 622 472" fill="none">
                     <path d="M83.2841 6.56474C217.631 -28.821 580.688 98.2371 616.074 232.584C651.459 366.931 492.334 341.846 357.987 377.232C223.64 412.618 81.2626 548.149 45.8769 413.802C10.4911 279.455 -51.0626 41.9505 83.2841 6.56474Z" fill="#93CADE" fillOpacity="0.3" />
                 </svg>
                 <svg className="svg1"width="400" height="420" viewBox="0 0 461 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.21051 458.514C0.21051 319.468 215.464 0.477966 354.338 0.477966C493.211 0.477966 428.45 148.091 428.45 287.137C428.45 426.183 523.209 598.531 384.335 598.531C245.462 598.531 0.21051 597.561 0.21051 458.514Z" fill="#93CADE" fillOpacity="0.3" />
                 </svg>

                
             </div>
             <div className='brand-content'>

                 <p>براندات نسائي عالمية</p>
                 <h4>
                     احدث أدوات النساء
                 </h4>
                 <p>براندات نسائي عالمية</p>
                 <button>
                     <Link to="/">اكتشف الآن </Link>
                 </button>
             </div>
         </div>
            </SwiperSlide>
            <SwiperSlide>
                
            <div className='slide'>
             
             <div className='brand-imgdiv'>
             <img src={img1}  alt='' />
                 < svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="450" height="400" viewBox="0 0 622 472" fill="none">
                     <path d="M83.2841 6.56474C217.631 -28.821 580.688 98.2371 616.074 232.584C651.459 366.931 492.334 341.846 357.987 377.232C223.64 412.618 81.2626 548.149 45.8769 413.802C10.4911 279.455 -51.0626 41.9505 83.2841 6.56474Z" fill="#93CADE" fillOpacity="0.3" />
                 </svg>
                 <svg className="svg1"width="400" height="420" viewBox="0 0 461 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.21051 458.514C0.21051 319.468 215.464 0.477966 354.338 0.477966C493.211 0.477966 428.45 148.091 428.45 287.137C428.45 426.183 523.209 598.531 384.335 598.531C245.462 598.531 0.21051 597.561 0.21051 458.514Z" fill="#93CADE" fillOpacity="0.3" />
                 </svg>

                
             </div>
             <div className='brand-content'>

                 <p>براندات نسائي عالمية</p>
                 <h4>
                     احدث أدوات النساء
                 </h4>
                 <p>براندات نسائي عالمية</p>
                 <button>
                     <Link to="/">اكتشف الآن </Link>
                 </button>
             </div>
         </div>
            </SwiperSlide>

        </Swiper>
    );
}





export default Header 
