import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import firstSlide from '../../assets/1.avif'
import secondSlide from '../../assets/2.avif'
import thirdSlide from '../../assets/3.avif'
import fourSlide from '../../assets/5.avif'

const Banner = () => {
  return (
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={firstSlide} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondSlide} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdSlide} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={fourSlide} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>
     


    </Swiper>

  


  );
};

export default Banner;