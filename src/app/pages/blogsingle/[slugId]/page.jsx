'use client'
import { Box, Button, Container, Typography, Grid, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { defaultImg, blogsApi } from '@/app/public/utils/constant';
import Link from 'next/link';
import { fetchBlogSingleData } from '@/app/public/config/helper';


const BlogSingle = () => {
    const [getData, setGetData] = useState([]);
    const [getSlugId, setGetSlugId] = useState('')
    const [loader, setLoader] = useState(true)
    const token = "your-token-here";
    const filterData = getData.find((data) => data.slug === getSlugId);
    const formattedDate = filterData && filterData.published_at
        ? new Date(filterData.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        : "";
    useEffect(() => {
        fetchBlogSingleData({
            blogsApi,
            token,
            setLoader,
            setGetSlugId,
            setGetData,
        });
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {/* Main Blog Content */}
                    <Grid item xs={12} md={8}>
                        <Box>
                            {loader ? (
                                <>
                                    <Skeleton variant="text" sx={{ fontSize: "46px", width: "80%", my: 1 }} />
                                    <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: "4px", my: 2 }} />
                                    <Skeleton variant="text" width="20%" sx={{ fontWeight: "bold", my: 1 }} />
                                    <Skeleton variant="text" sx={{ fontSize: "18px", width: "90%", my: 2 }} />
                                    <Skeleton variant="text" sx={{ fontSize: "16px", width: "100%", my: 2 }} />
                                    <Skeleton variant="text" sx={{ fontSize: "16px", width: "100%", my: 2 }} />
                                </>
                            ) : (
                                <>
                                    <Typography component={"div"} sx={{ color: "#212529" }}>

                                        <p style={{ fontWeight: "bold" }}>
                                            <Link href={'/'}>
                                                Home
                                            </Link>
                                        </p>

                                    </Typography>
                                    <Typography component={"p"} sx={{ color: "#212529" }}>
                                        <small>
                                            {formattedDate}
                                        </small>
                                    </Typography>
                                    <Typography variant="h1" component="h1" sx={{ fontSize: "46px", fontWeight: "bold", textAlign: "start", my: "15px" }}>
                                        {filterData?.title}
                                    </Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>Admin</Typography>
                                    <Typography>
                                        <Box
                                            component="div"
                                            sx={{
                                                marginBottom: '12px',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: filterData?.short_description }}
                                        />
                                    </Typography>
                                    <Box sx={{ mb: "20px" }}>
                                        <img src={filterData?.blogImage || defaultImg} alt={filterData?.image_alt} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} loading='eager' onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }} />
                                    </Box>
                                    <Typography sx={{ fontSize: "18px", my: "20px" }}>
                                        <Box
                                            component="div"
                                            sx={{
                                                fontSize: '16px',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: filterData?.long_description }}
                                        />


                                    </Typography>

                                    <Typography sx={{ fontSize: "16px", my: "20px" }}>
                                        {filterData?.content}
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </Grid>
                    {/* Sidebar for Recent Blogs */}
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>
                                Recent Blogs
                            </Typography>
                            {/* Map through recentBlogs directly in BlogSingle */}
                            <Box>
                                {loader ? (
                                    // Skeleton loader for 5 items
                                    Array.from(new Array(5)).map((_, index) => (
                                        <Box key={index} sx={{ display: "flex", my: 1, alignItems: "center" }}>
                                            <Skeleton variant="rectangular" width={60} height={60} sx={{ borderRadius: "5px" }} />
                                            <Box sx={{ paddingLeft: "10px", flex: 1 }}>
                                                <Skeleton variant="text" width="20%" />
                                                <Skeleton variant="text" width="80%" />
                                            </Box>
                                        </Box>
                                    ))
                                ) : (
                                    getData
                                        .filter((blog) => blog.slug !== getSlugId)
                                        .slice(0, 5)
                                        .map((blog) => (
                                            <Link href={`/pages/blogsingle/${blog.slug}`}>
                                                <Button
                                                    key={blog.id}
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "start",
                                                        width: "100%",
                                                        my: 1,
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    <img
                                                        src={blog.blogImage || defaultImg}
                                                        alt={blog.title}
                                                        width={60}
                                                        height={60}
                                                        style={{ borderRadius: "5px", objectFit: "cover" }}
                                                        loading="lazy"
                                                        onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }}
                                                    />
                                                    <Box sx={{ paddingLeft: "10px", flex: 1 }}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "10px",
                                                                color: "#000",
                                                                textOverflow: "ellipsis",
                                                                overflow: "hidden",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            {blog.published_at}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "14px",
                                                                color: "#000",
                                                                textOverflow: "ellipsis",
                                                                overflow: "hidden",
                                                                whiteSpace: "nowrap",
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            {blog.title}
                                                        </Typography>
                                                    </Box>
                                                </Button>
                                            </Link>
                                        ))
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid >
            </Container >
        </>
    );
};

export default BlogSingle;
