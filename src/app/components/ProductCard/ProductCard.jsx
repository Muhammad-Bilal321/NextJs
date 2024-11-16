"use client";
import globalColor from '@/app/public/assets/globalColors/globalColor';
import { Box, Button, Grid2, Typography } from '@mui/material';
import "./ProductCard.css";
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ productCardData }) => {
    return (
        <Box>
            <Grid2 container spacing={{ xl: 5, xs: 2 }} justifyContent={"space-between"}>
                {productCardData?.map((product, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4, }} key={index}>
                        <Box
                            className="box"
                            sx={{
                                transition: 'box-shadow 0.3s ease',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            {/* Ribbon Section */}
                            <Box className="ribbon ribbon-top-left">
                                <span>{product.offerType}</span>
                            </Box>

                            {/* Image Section */}
                            <Box sx={{ height: '60%', backgroundColor: '#f5f5f5', overflow: "hidden" }}>
                                <Image
                                    src={product.img}
                                    alt={product.offerTitle}
                                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                />
                            </Box>

                            {/* Content Section */}
                            <Box sx={{ padding: '16px' }}>
                                <Typography variant="h6" component={"p"} gutterBottom>
                                    {product.offerTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Expires On: {product.expirationDate}
                                </Typography>
                            </Box>

                            {/* Button Section */}
                            <Box sx={{ padding: '16px', textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: globalColor.mainColor, color: '#fff', width: '100%' }}
                                >
                                    {product.buttonTitle}
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>
                ))
                }
            </Grid2>
        </Box >

    );
};

export default ProductCard;
