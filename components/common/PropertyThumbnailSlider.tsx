'use client';


import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import { Text } from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// interface PropertyThumbnailSliderProps {
//     photos: string[];
//   }


// const PropertyThumbnailSlider = ({photos}: PropertyThumbnailSliderProps) => {
const PropertyThumbnailSlider = () => {

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
                        {/* <Image
                            src="https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/yYe39fDTZBopaISUagjI-0.jpeg"
                            alt='photo'
                            width={400}
                            height={400}
                            className='block h-full w-full object-cover'
                            /> */}
                        <Text>Photo 1</Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>Photo 2</Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>Photo 3</Text>
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

export default PropertyThumbnailSlider;
