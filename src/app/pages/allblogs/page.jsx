'use client';
import React, { useState } from 'react';
import HeroCarousel from '@/app/components/AllBlogs/HeroCarousel';
import BlogsSection from '@/app/components/AllBlogs/BlogsSection';
import { Box, Container, Typography, Button, CircularProgress, LinearProgress } from '@mui/material';
import { cardData, blogsApi } from '@/app/public/utils/constant';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { fetchAllBlogs } from '@/app/public/config/helper';
import useSWR from 'swr';
import globalColor from '@/app/public/assets/globalColors/globalColor';
import PageNotFound from '@/app/components/PageNotFound/PageNotFound';

const AllBlogs = () => {
    const token = "your-token-here";
    const [currentApiUrl, setCurrentApiUrl] = useState(blogsApi);

    // Use SWR to fetch data and pagination links
    const { data, error } = useSWR(
        ['fetchAllBlogs', token, currentApiUrl],
        () => fetchAllBlogs(token, currentApiUrl),
        { revalidateOnFocus: false }
    );

    const isLoading = !data && !error;
    const blogData = data?.data.data || [];
    const paginationLinks = data?.data.links || [];

    // Log pagination links for debugging
    console.log("blogData Links:", blogData);

    const handlePageChange = (url) => {
        console.log("Navigating to URL:", url);
        if (url) {
            setCurrentApiUrl(blogsApi + `&page=${url}`);
        }
    };

    if (error) {
        console.error("Error loading data:", error);
        return <div><PageNotFound /></div>;
    }

    return (
        <>
            <Box>
                <HeroCarousel slides={cardData} />
            </Box>

            <Container maxWidth="xl">
                <Typography variant="h1" sx={{ fontSize: "32px", fontWeight: "bold", textAlign: "start", marginY: "15px" }}>
                    Featured Blogs
                </Typography>

                <Box sx={{ marginY: "30px" }}>
                    <Box>

                        <BlogsSection cardData={blogData} loader={isLoading} />

                    </Box>

                    {/* Pagination Controls */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        {paginationLinks && paginationLinks.length > 0 ? (
                            paginationLinks.map((link, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handlePageChange(link.label)}
                                    disabled={!link.url}
                                    variant={link.active ? 'contained' : 'outlined'}
                                    color={link.active ? 'primary' : 'default'}
                                    sx={{
                                        mx: 0.5,
                                        width: 40,
                                        height: 40,
                                        minWidth: 40,
                                        minHeight: 40,
                                        borderRadius: '50%',
                                        border: "0px",
                                        backgroundColor: link.active ? globalColor.mainColor : 'transparent',
                                        color: link.active ? 'white' : 'inherit',
                                        '&:hover': {
                                            backgroundColor: link.active ? globalColor.mainColor : '#f0f0f0',
                                        },
                                    }}
                                >
                                    {link.label.includes('Next') ? (
                                        <KeyboardArrowRightIcon />
                                    ) : link.label.includes('Previous') ? (
                                        <KeyboardArrowLeftIcon />
                                    ) : (
                                        link.label.replace(/&laquo;|&raquo;/g, '') // Render numeric labels
                                    )}
                                </Button>

                            ))
                        ) : (
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress sx={{ backgroundColor: globalColor.mainColor }} color='warning' />
                            </Box>
                        )}
                    </Box>

                </Box>
            </Container>
        </>
    );
};

export default AllBlogs;
