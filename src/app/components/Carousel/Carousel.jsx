'use client'
import React, { useEffect } from 'react'
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const Carousel = ({ images, breakpoints, perPage = 3, autoplayInterval = 3000 }) => {
    useEffect(() => {
        // Any other client-side initialization if necessary
    }, []);

    return (
        <Splide
            options={{
                rewind: true,
                rewindSpeed: 1000,
                autoplay: true,               // Enable autoplay
                interval: autoplayInterval,    // Slide interval passed as prop
                pauseOnHover: true,            // Pause on hover
                arrows: false,                 // Disable navigation arrows
                pagination: false,             // Disable dots
                perPage: perPage,              // Per page prop
                gap: '1rem',                   // Adjust gap between slides
                breakpoints: breakpoints || {  // Default breakpoints if none provided
                    640: {
                        perPage: 1,            // Mobile screens: 1 slide per page
                        gap: '0.5rem',         // Smaller gap on mobile
                    },
                },
            }}
        >
            {images?.map((image, index) => (
                <SplideSlide key={index}>
                    <Image src={image.src} alt={image.alt || `Image ${index + 1}`} />
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default Carousel;
