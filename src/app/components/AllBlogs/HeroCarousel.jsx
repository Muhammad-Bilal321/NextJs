'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const HeroCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    // Automatically switch slides every 4 seconds
    useEffect(() => {
        let autoplayInterval;
        if (autoplay) {
            autoplayInterval = setInterval(() => {
                handleNext();
            }, 4000);
        }
        return () => clearInterval(autoplayInterval);
    }, [autoplay, currentSlide]);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <Box position="relative" width="100%" height="400px" overflow="hidden">
            {/* Slide */}
            {slides.map((slide, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                >
                    <Image
                        src={slide.imgSrc}
                        alt={slide.title}
                        priority={true}
                        loading='eager'
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            ))}

            {/* Navigation Controls */}
            <IconButton
                onClick={handlePrev}
                aria-label='handlePrev'
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    zIndex: 10,
                }}
            >
                <ArrowBackIos />
            </IconButton>
            <IconButton
                onClick={handleNext}
                aria-label='handleNext'
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    zIndex: 10,
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};

export default HeroCarousel;
