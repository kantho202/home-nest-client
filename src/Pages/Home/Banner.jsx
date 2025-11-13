import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import firstSlide from '../../assets/Black And Grey Real Estate Instagram Post.png'
import secondSlide from '../../assets/Black And Grey Real Estate Instagram Post.png'
import thirdSlide from '../../assets/Black And Grey Real Estate Instagram Post.png'
import fourSlide from '../../assets/Black And Grey Real Estate Instagram Post.png'
import fiveSlide from '../../assets/Black And Grey Real Estate Instagram Post.png'

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
      <SwiperSlide>
        <img src={fiveSlide} alt="" style={{width:"100%" ,height:"500px" }} />
      </SwiperSlide>


    </Swiper>

  


  );
};

export default Banner;