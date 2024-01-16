import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import './HomeSwiper.css';

import slide1 from '../../../public/home/slide1.jpg'
import slide2 from '../../../public/home/slide2.jpg'
import slide3 from '../../../public/home/slide3.jpg'
import slide4 from '../../../public/home/slide4.jpg'
import slide5 from '../../../public/home/slide5.jpg'
import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";

const HomeSwiper = () => {
  return (
    <div className="my-24">
      <TitleSubTitle title={'Order Online'} subTitle={'From 11:00am to 10:00pm'} ></TitleSubTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
