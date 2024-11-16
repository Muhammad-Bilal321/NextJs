'use client'
import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const CategoryCard = ({ cardData }) => {
    return (
        <Box>
            <Grid2 container spacing={2}>
                {cardData?.map((category, index) => (

                    <>
                        <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} sx={{ marginX: { lg: "18px" } }}>
                            <Box sx={{ width: "100%", }}>
                                <Link href={`/pages/allcategories/${category.slug}`} aria-label='categorysingle'>
                                    <Box sx={{
                                        width: { sm: "210px", xs: "100%" },
                                        height: "200px",
                                        border: "1px solid #dee2e6",
                                        overflow: "hidden",
                                        borderRadius: "10px",
                                        position: "relative",

                                    }}
                                        key={index}>
                                        <Box sx={{ textAlign: "center", width: "100%", height: "100%" }}>
                                            <img
                                                src={category.categoryImages}
                                                alt={category.image_alt}
                                                loading='lazy'
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%", // Full width for responsive
                                                    height: "100%", // Full height for responsive
                                                    padding: "30px"
                                                }}
                                            />
                                        </Box>

                                        <Typography
                                            component="p"
                                            sx={{
                                                position: "absolute",
                                                bottom: 0, // Stick to the bottom
                                                left: 0, // Align text to the left
                                                right: 0, // Align text to the right
                                                textAlign: "center", // Center the text horizontally
                                                color: "#000", // White text color for contrast
                                                p: 1, // Padding inside the text box
                                                fontWeight: "bold" // Bold font for emphasis
                                            }}
                                        >
                                            {category.name}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Grid2>
                    </>
                ))}
            </Grid2>
        </Box>
    )
}

export default CategoryCard
