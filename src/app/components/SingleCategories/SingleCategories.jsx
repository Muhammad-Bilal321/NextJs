import React from 'react';
import { Box, Button, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import categoryCard from '@/app/public/assets/images/kontidor.png';
import Link from 'next/link';
// import { categoryCardData } from '@/app/public/utils/constant';

const SingleCategories = ({ categoryCardData, loader }) => {

    return (
        <Box>
            <Grid2 container spacing={2} justifyContent={"center"}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    {/* Loop through cardData to create card components */}
                    <Typography variant='h1' component="h1" sx={{ fontSize: "32px", marginY: 2, fontWeight: "bold" }}>
                        Apparel And Clothing
                    </Typography>
                    <Grid2 container spacing={2}>
                        {categoryCardData?.map((category, index) => (
                            <Grid2 size={{ md: 3, sm: 4, xs: 12 }} key={index}>
                                <Box sx={{ width: "100%", borderRadius: "10px", boxShadow: 5, padding: 4 }}>
                                    <Box>
                                        <img
                                            src={category?.categoryImages}
                                            width={250}
                                            height={250}
                                            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                                            alt={category.title}
                                        />
                                    </Box>
                                    <Box sx={{ textAlign: "start", mt: 2 }}>
                                        <Typography component="p" sx={{ fontWeight: "bold", fontSize: "16px", mb: 1 }}>
                                            {category.title}
                                        </Typography>
                                        <Typography component="p" sx={{ fontSize: "12px", mb: 2 }}>
                                            {category.typo}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{ borderRadius: "20px", width: "100%", py: 1, fontWeight: "bold", fontSize: "16px", backgroundColor: "#212529" }}
                                        >
                                            <Link href={"/pages/storesingle"}> View Offer</Link>
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
                {/* Static Right Side Image */}
                <Grid2 size={{ xs: 12, md: 2 }} sx={{ marginTop: { lg: "70px" } }}>
                    <Box>
                        <img
                            src={categoryCard}
                            width={250}
                            height={250}
                            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
                            alt="right side image"
                        />
                    </Box>
                </Grid2>
            </Grid2>
        </Box >
    );
};

export default SingleCategories;
