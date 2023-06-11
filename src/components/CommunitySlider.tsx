import React, {FC} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation'
import {AiFillDiff} from "react-icons/all";

interface TestimonialProps {
    testimonials: any
}

interface Testimonial {
    image: any
    name: string
    message: string
}

const CommunitySlider: FC<TestimonialProps> = ({testimonials}) => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={'auto' as any}
            modules={[]}>
            {testimonials.map((testimonial : Testimonial, idx: number)=>{
                const {image, name, message} = testimonial
                return(
                    <SwiperSlide key={idx}>
                        <div className='relative'>
                            <div>
                                <img src={image} alt={name}/>
                            </div>
                            <div>
                                <div>{message}</div>
                                <div>
                                    <span>~</span>
                                    <div>{name}</div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default CommunitySlider;