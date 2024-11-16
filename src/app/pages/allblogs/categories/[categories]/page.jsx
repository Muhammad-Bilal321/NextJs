"use client"
import BlogsSection from '@/app/components/AllBlogs/BlogsSection'
import { fetchData, fetchBlogSingleData } from '@/app/public/config/helper'
import { blogsApi, categoryApi } from '@/app/public/utils/constant'
import { Box, Container, Pagination, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = () => {
    const token = "your-token-here";
    const [getData, setGetData] = useState([])
    const [getCate, setGetCate] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [getSlugId, setGetSlugId] = useState('')
    const [loader, setLoader] = useState(true)
    const filterData = getCate.find((data) => data.slug === getSlugId);
    const getSelectedBlogs = getData.filter((dataId) => dataId.category_id === filterData.id)
    const itemsPerPage = 6;
    const totalPages = Math.ceil(getSelectedBlogs.length / itemsPerPage)
    const currentData = getSelectedBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    useEffect(() => {
        fetchBlogSingleData({
            blogsApi,
            token,
            setLoader,
            setGetSlugId,
            setGetData,
        });
        fetchData(setGetCate, categoryApi);
    }, [token])

    return (
        <>
            <Container>
                <Box sx={{ marginY: "20px" }}>
                    <Typography variant='h4' component={"h1"} sx={{ fontWeight: "bold" }}>{filterData?.name}</Typography>
                </Box>
                <Box>
                    <BlogsSection cardData={getSelectedBlogs} loader={loader} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <Pagination
                        count={totalPages}
                        page={currentData}
                        onChange={(e, page) => setCurrentPage(page)}
                        color="warning"
                        shape="circle"
                    />
                </Box>
            </Container>
        </>
    )
}

export default Category 
