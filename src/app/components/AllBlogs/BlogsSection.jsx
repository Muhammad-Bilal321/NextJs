'use client'
import { defaultImg } from '@/app/public/utils/constant'
import { Box, Typography, Grid, Skeleton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogsSection = ({ cardData, loader }) => {
    return (
        <Box>
            <Grid container spacing={3}>
                {(loader ? Array.from(new Array(6)) : cardData)?.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ width: "100%" }}>
                            <Link href={loader ? "#" : `/pages/blogsingle/${card?.slug}`}>
                                {/* Image box with skeleton loader */}
                                <Box sx={{ border: "1px solid #fff", height: "220px", width: "100%", overflow: "hidden", borderRadius: "15px" }}>
                                    {loader ? (
                                        <Skeleton variant="rectangular" width="100%" height="100%" />
                                    ) : (
                                        <img
                                            src={card.blogImage}
                                            alt="blog-image"
                                            height={220}
                                            width={220}
                                            style={{ objectFit: 'cover', width: "100%" }}
                                            loading="lazy"
                                        />
                                    )}
                                </Box>

                                {/* Title */}
                                <Typography variant="h4" component="h2" sx={{ fontSize: "20px", mt: 2, fontWeight: "bold" }}>
                                    {loader ? <Skeleton width="60%" /> : card.title}
                                </Typography>

                                {/* Author */}
                                <Typography sx={{ color: "gray", mb: 1 }}>
                                    {loader ? <Skeleton width="40%" /> : card.created_by}
                                </Typography>

                                {/* Description with truncation */}
                                <Typography
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        width: '100%',
                                    }}
                                >
                                    {loader ? (
                                        <Skeleton width="90%" />
                                    ) : (
                                        card.categoryName
                                    )}
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BlogsSection;
