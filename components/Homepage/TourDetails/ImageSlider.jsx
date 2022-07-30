import React from "react"

// react carousel library
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({slides})=>{
    return (
        <Carousel infiniteLoop  onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            {slides.map((slide) => {
                return <Image src={slide.image} height="auto" width="800px" />;
            })}
        </Carousel>
    )
}
export default ImageSlider;