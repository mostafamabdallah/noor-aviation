import React, { useState } from "react";
import SingleSlider from "./SingleSlider";
import image1 from "../../../imgs/Final/01.jpg";
import image2 from "../../../imgs/Final/02.jpg";
import image3 from "../../../imgs/Final/03.jpg";
import image4 from "../../../imgs/Final/04.jpg";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectCreative } from "swiper";
const Slider = () => {
  const [photos, setPhotos] = useState({
    1: image1,
    2: image2,
    3: image3,
    4: image4,
  });
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect={"creative"}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/operation-Managment">
            <SingleSlider
              home={true}
              img={photos["1"]}
              text={{
                header: "Zadah beyond design",
                des: "We create unique handmade home decor and lifestyle products.",
              }}
            ></SingleSlider>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/maintenace-management">
            <SingleSlider
              home={false}
              img={photos["2"]}
              text={{ header: "Branding", des: "" }}
            ></SingleSlider>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/budget-management">
            <SingleSlider
              home={false}
              img={photos["3"]}
              text={{ header: "Home Decoration", des: "" }}
            ></SingleSlider>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlider
            home={false}
            img={photos["4"]}
            text={{ header: "Furniture", des: "" }}
          ></SingleSlider>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
