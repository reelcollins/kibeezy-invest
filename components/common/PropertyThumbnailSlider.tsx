'use client';


import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import { Text } from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'


interface Props {
    main_photo: String;
    photo_1: String;
    photo_2: String;
    photo_3: String;
  }
  
export default function PropertyThumbnailSlider({
    main_photo,
    photo_1,
    photo_2,
    photo_3,

  }: Props) {

    return (
        <section className='py-12'>
            <div className='container'>
                <Swiper
                navigation
                pagination={{ type: 'fraction' }}
                modules={[Navigation, Pagination]}
                onSwiper={swiper => console.log(swiper)}
                className='h-96 w-full rounded-lg'
                >
                    <SwiperSlide>
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                src="https://vercel-app.s3.amazonaws.com/media/Screenshot_2023-12-18-03-36-45-510_com.google.android.youtube.jpg"
                                alt='photo'
                                width={400}
                                height={400}
                                className='block h-full w-full object-cover'
                                />
                        </div>
    
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                src={photo_1}
                                alt='photo'
                                width={400}
                                height={400}
                                className='block h-full w-full object-cover'
                                />
                        </div>
  
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                src={photo_2}
                                alt='photo'
                                width={400}
                                height={400}
                                className='block h-full w-full object-cover'
                                />
                        </div>
 
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                src={photo_3}
                                alt='photo'
                                width={400}
                                height={400}
                                className='block h-full w-full object-cover'
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
    )
}
