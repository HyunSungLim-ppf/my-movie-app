import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export const Home = () => {
  return (
    <div className="home_container">
      {/* home contents */}
      <div className="home_contents">
        <img src="/my-movie-app/images/slider/welcome_text_img.png" alt="" />
        <h1>Hayashi Movie App</h1>
        <p>You Can get Movie List By Genre</p>
        <p>You Can get Movie Detail at Movie List</p>
        <p>Enjoy👍</p>
        <Link to={`/genres`}>Go Genre List</Link>
      </div>

      {/* Swiper */}
      <Swiper
        // install Swiper modules
        // modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        effect={"fade"}
        // fadeEffect={{ crossFade: false }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        // autoplay={{ delay: 1000 }}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="slider1"
            style={{ backgroundImage: "url(/my-movie-app/images/slider/slider_img_01.png)" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider2"
            style={{ backgroundImage: "url(/my-movie-app/images/slider/slider_img_02.png)" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider3"
            style={{ backgroundImage: "url(/my-movie-app/images/slider/slider_img_03.png)" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider4"
            style={{ backgroundImage: "url(/my-movie-app/images/slider/slider_img_04.png)" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
