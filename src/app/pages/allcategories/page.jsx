'use client'
import AllCategory from '@/app/components/AllCategories/AllCategory';
import { allCategories } from '@/app/public/utils/constant';
import { Box, Container } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllCategories = () => {
    const [getData, setGetData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(allCategories).then((res) => {
            setGetData(res.data.data)
        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }, []);
    return (
        <>

            <Box>
                <AllCategory loading={loading} cardData={getData} />
            </Box>
        </>
    )
}

export default AllCategories
