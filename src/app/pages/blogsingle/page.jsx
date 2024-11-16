import BlogsSection from '@/app/components/AllBlogs/BlogsSection'
import { Box, Button, Container, Grid2, Typography } from '@mui/material'
import offerCard from "@/app/public/assets/images/qure.png"
import React from 'react'
import Image from 'next/image'

const page = () => {

    return (
        <>
            <Container maxWidth={"xl"}>
                <Grid2 container>
                    <Grid2 size={8}>
                        <Box>
                            <Typography variant='h1' component={"h1"} sx={{ fontSize: "46px", fontWeight: "bold", textAlign: "Start", marginY: "15px" }}>
                                5 Must-Have Brooklinen Products for a Dreamy Bedroom Makeover
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Admin
                            </Typography>
                            <Typography sx={{ fontSize: "18px", marginY: "20px" }}>
                                Many brands in the market offer a variety of bedroom accessories, but one of the standout names is Brooklinen. It offers a range of high-quality bedding and accessories that can upgrade the look and feel of any bedroom.
                            </Typography>
                            <Box sx={{ marginBottom: "20px" }}>
                                <Image src={offerCard} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
                            </Box>
                            <Typography sx={{ fontSize: "16px", marginY: "20px" }}>
                                Creating a comfortable and stylish bedroom doesn’t have to be a challenge. Your bedroom is more than just a place to sleep, it’s your personal space where you can relax and unwind after a long day. A well-designed bedroom not only enhances your sleep quality but also contributes to your overall well-being by providing a calming and inviting atmosphere. Achieving this balance of comfort and style starts with choosing the right products.
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box>
                            <Typography sx={{ fontWeight: "bold", fontSize: "26px", }}>
                                Recent Blogs
                            </Typography>
                            <Box>
                                <Button sx={{ display: "flex", justifyContent: "start", width: "100%" }}>
                                    <Image src={offerCard} style={{ width: "25%", height: "25%", borderRadius: "5px" }} />
                                    <Typography sx={{ paddingLeft: "10px", fontSize: "12px", color: "#000", textAlign: "start", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                        Creating a comfortable and stylish bedroom doesn’t have to be a challenge. Your bedroom is more than just a place to sleep, it’s your personal space where you can relax and unwind after a long day. A well-designed bedroom not only enhances your sleep quality but also contributes to your overall well-being by providing a calming
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    )
}

export default page
