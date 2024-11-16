'use client'
import SingleCategories from '@/app/components/SingleCategories/SingleCategories'
import { allCategories } from '@/app/public/utils/constant'
import { Box } from '@mui/material'
import { fetchBlogSingleData } from '@/app/public/config/helper'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CategorySingle = () => {
    const token = "your-token-here";
    const [getData, setGetData] = useState([])
    const [getCate, setGetCate] = useState([])
    const [getSlugId, setGetSlugId] = useState('')
    const [loader, setLoader] = useState(true)
    const filterData = getCate.find((data) => data.slug === getSlugId);
    useEffect(() => {
        axios.get(allCategories).then((res) => {
            console.log(res.data.data)
            setGetData(res.data.data)
        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            setLoader(false)
        })
        // fetchBlogSingleData({
        //     storeApi,
        //     token,
        //     setLoader,
        //     setGetSlugId,
        //     setGetData,
        // });
    }, [token])
    return (
        <>
            <Box>
                <SingleCategories categoryCardData={getData} loader={loader} />
            </Box>
        </>
    )
}

export default CategorySingle
