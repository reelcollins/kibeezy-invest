"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Text } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  main_photo: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
}

export default function PropertyThumbnailSlider({
  main_photo,
  photo_1,
  photo_2,
  photo_3,
}: Props) {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-full rounded-lg"
        >
          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={main_photo}
                alt="photo"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={photo_1}
                alt="photo"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={photo_2}
                alt="photo"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={photo_3}
                alt="photo"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>

          {/* {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                src={photo}
                                alt='photo'
                                className='block h-full w-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                ))} */}
        </Swiper>
      </div>
    </section>
  );
}
