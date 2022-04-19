import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Swiping({posts}) {

  console.log(posts);
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
              spaceBetween: 20,
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
        className=""
      >
        {posts.map((post) => {
          return (
          <SwiperSlide key={post.node.slug}>
            <img src={post.node.featuredImage.node.sourceUrl} />
            <p>{post.node.title}</p>
            </SwiperSlide>
          )
        })}
        <SwiperSlide>yo</SwiperSlide>
        <SwiperSlide>Upwork</SwiperSlide>
        <SwiperSlide>Blog</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}