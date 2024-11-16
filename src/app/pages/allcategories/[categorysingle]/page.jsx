'use client'
import SingleCategories from "@/app/components/SingleCategories/SingleCategories";
import { fetchBlogSingleData } from "@/app/public/config/helper";
import { allCategories } from "@/app/public/utils/constant";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const CategorySingle = () => {
    const token = "your-token-here";
    const [getData, setGetData] = useState([])
    const [getCate, setGetCate] = useState([])
    const [getSlugId, setGetSlugId] = useState('')
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetchBlogSingleData({
            allCategories,
            token,
            setLoader,
            setGetSlugId,
            setGetData,
        });
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
