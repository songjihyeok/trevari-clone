import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './slideshow.css'

const slideImages = [
    '/assets/imageslide/banner.png',
    '/assets/imageslide/banner2.png',
    '/assets/imageslide/banner3.png'
  ];

const slideShow = ()=>{
    return ( <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img className="image_wrapper" src={slideImages[0]}/></SwiperSlide>
    <SwiperSlide><img className="image_wrapper" src={slideImages[1]}/></SwiperSlide>
    <SwiperSlide><img className="image_wrapper" src={slideImages[2]}/></SwiperSlide>
  </Swiper>
  )
}

export default slideShow