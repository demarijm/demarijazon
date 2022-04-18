import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Swiping() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Resume</SwiperSlide>
        <SwiperSlide>Upwork</SwiperSlide>
        <SwiperSlide>Blog</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}