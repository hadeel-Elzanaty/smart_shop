import React, { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Eader = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <main>
      <Swiper
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
      >
        {/* ... */}
      </Swiper>

      <Swiper
        modules={[Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {/* ... */}
      </Swiper>
    </main>
  );
};export default Eader;
{/*
import React, { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const App = () => {
  // store controlled swiper instance
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <main>
      {/* Main Swiper -> pass controlled swiper instance */}
     /*  <Swiper modules={[Controller]} controller={{ control: controlledSwiper }} ...>
        {/* ... */
//</Swiper>

      {/* Controlled Swiper -> store swiper instance */}
      //<Swiper modules={[Controller]} onSwiper={setControlledSwiper} 