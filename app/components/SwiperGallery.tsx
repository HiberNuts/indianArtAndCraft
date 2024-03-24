"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { simplifiedProduct } from "../interface";
import Image from "next/image";

const SwiperGallery = ({ data }: any) => {
  return (
    <div className="w-full h-[300px] p-10 md:mb-32 mb-24">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore our gallery</h2>
      <Swiper
        slidesPerView={window.innerWidth < 600 ? 1 : 4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {data
          ?.slice()
          .reverse()
          .map((product: simplifiedProduct, index: number) => (
            <div className=" h-[300px] flex justify-center align-middle">
              <SwiperSlide key={index}>
                <img src={product.imageUrl} alt="Product image" className="object-contain overflow-hidden" />
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
