import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/ImageSlider.module.scss";
import {addDomain} from "@/utils/envUrls";
import Image from "next/image";
import React from "react";

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={10} // Space between slides
                slidesPerView={1} // Show one slide at a time
                pagination={{ clickable: true }} // Enable pagination dots
                loop={true} // Infinite loop
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={addDomain(image)}
                            alt={`${name} main image`}
                            width={600}
                            height={600}
                            className={styles.productImage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
