import BlogsSection from '@/app/components/AllBlogs/BlogsSection'
import offerCard from "@/app/public/assets/images/qure.png"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Travel = () => {
    const cardData = [
        {
            imgSrc: offerCard,
            title: "5 Essential Camping Accessories from White Duck Outdoors"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
        {
            imgSrc: offerCard,
            title: " Apparel And Clothing"
        },
    ]
    return (
        <>
            <Container>
                <Box sx={{ marginY: "20px" }}>
                    <Typography variant='h4' component={"h1"} sx={{ fontWeight: "bold" }}>Travel</Typography>
                </Box>
                <Box>
                    <BlogsSection cardData={cardData} loading={"eager"} />
                </Box>
            </Container>
        </>
    )
}

export default Travel
