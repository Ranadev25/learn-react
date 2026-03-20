"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerImg1 from "./../../../public/image/home/photo/02506ca1-7927-43e4-918a-26fb33c5aec2_BD-1976-688.jpg";
import BannerImg2 from "./../../../public/image/home/photo/4b737c4f-30fe-4613-b18d-157b7501de66_BD-1976-688.jpg";
import BannerImg3 from "./../../../public/image/home/photo/6c2f8550-71b4-4465-8dd1-544eea751fa7_BD-1976-688.jpg_2200x2200q80.jpg";
import BannerImg4 from "./../../../public/image/home/photo/a9b5e949-fa48-4822-8d29-665db98455b4_BD-1976-688.jpg_2200x2200q80.jpg";
import BannerImg5 from "./../../../public/image/home/photo/b2e05280-ffb0-42a8-8082-c542ecd513ba_BD-1976-688.jpg_2200x2200q80.jpg";
import BannerImg6 from "./../../../public/image/home/photo/dc8f2d1b-ae55-4053-8377-393eec80bfc6_BD-1976-688.jpg";
import BannerImg7 from "./../../../public/image/home/photo/e4b4cc20-1529-4de1-9962-77383a6d9d10_BD-1976-688.jpg";
import BannerImg8 from "./../../../public/image/home/photo/fa08a1bd-8351-441e-ade1-ecf3a85c3526_BD-1976-688.jpg";
import BannerImg9 from "./../../../public/image/home/photo/fa08a1bd-8351-441e-ade1-ecf3a85c3526_BD-1976-688.jpg_2200x2200q80.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Side_Download_App from "../lib/Side_Download_App";
import Banner_secend from "../lib/Banner_secend";

const Banners = () => {
  return (
    <div className="">
      <div className="flex justify-center px-2">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=" w-full lg:w-4/5 mx-auto"
        >
          <SwiperSlide>
            <Image src={BannerImg1} alt="banner-img" className="w-full " />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg2} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg3} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg4} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg5} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg6} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg7} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg8} alt="banner-img" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BannerImg9} alt="banner-img" className="w-full" />
          </SwiperSlide>
        </Swiper>
        <Side_Download_App />
      </div>

      <div>
        <Banner_secend/>
      </div>
    </div>
  );
};

export default Banners;
