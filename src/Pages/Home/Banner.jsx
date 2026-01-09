import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import firstSlide from '../../assets/image-6.avif';
import secondSlide from '../../assets/2.avif';
import thirdSlide from '../../assets/image-3.avif';
import fourSlide from '../../assets/image-5.avif';

const Banner = () => {
  return (
<<<<<<< HEAD
    <div className="w-full h-[60vh] lg:h-[100vh]">
=======
    <div className="w-full h-[100vh]">
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        // grabCursor={true}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {[firstSlide, secondSlide, thirdSlide, fourSlide].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                <div className="absolute inset-0 bg-black/40 flex items-center">
                  <div className="container  mx-auto px-6 text-white">
<<<<<<< HEAD
                    <h1 className="text-2xl lg:text-4xl text-center dm-serif-display-regular md:text-6xl font-bold mb-4 tracking-wider">
                      Your Partner in Dubai Real <br /> Estate
                    </h1>
                    <p className="text-[14px] text-lg text-center uppercase">
=======
                    <h1 className="text-4xl text-center dm-serif-display-regular md:text-6xl font-bold mb-4 tracking-wider">
                      Your Partner in Dubai Real <br /> Estate
                    </h1>
                    <p className=" text-lg text-center uppercase">
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                      High-Quality Homes and Apartments Designed for Modern Living

                    </p>
                    <button className='btn text-center mx-auto flex justify-center my-btn border-0 uppercase mt-3'>Requested our brochure</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Banner;
