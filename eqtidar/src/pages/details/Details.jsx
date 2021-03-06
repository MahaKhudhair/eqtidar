import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import details01 from "../../assets/img/details01.jpg";
import details02 from "../../assets/img/details02.jpg";
import details03 from "../../assets/img/details03.jpg";
import details04 from "../../assets/img/details04.jpg";
import details05 from "../../assets/img/details05.jpg";
import Button from "react-bootstrap/Button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./details.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container_details">
      <Swiper
        style={{
          "--swiper-navigation-color": "#333",
          "--swiper-pagination-color": "#333",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main_details"
      >
        <SwiperSlide>
          <img src={details01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details05} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb_details "
      >
        <SwiperSlide>
          <img src={details01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={details05} />
        </SwiperSlide>
      </Swiper>
      <br /> <br />
      <div className="details_details">
        <div className="header_details">
          <div className="title_details">
            <h5 className="mt-3">???????? ?????????? ??????????</h5>
          </div>
          <div>
            <Button type="submit" className="btn_details py-2 px-4 mx-5">
              ???????? ??????
            </Button>
          </div>
        </div>
        <br />
        <div className="text_details">
          <h4 className="">??????????: 35,300.000 ??????????</h4>
          <p>
            ?????????? ?????? ???????? ?????? ?????? ???????????? ???????????? 350 ???? ?????????????? 5 ?????? ?????? ????
            ?????????? ?????????????? ?????? ?????? ???????? ????????
          </p>
          <p>?????? ??????????: 4</p>
          <p>?????? ??????????????: 2</p>
          <p>????????????: 1</p>
          <Button type="submit" className="location_details px-0">
            ???????????? ?????? ??????????????
          </Button>
        </div>
      </div>
    </div>
  );
}
