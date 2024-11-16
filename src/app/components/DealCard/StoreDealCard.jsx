'use client'
import { Box, Divider, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import dealBanner from '@/app/public/assets/images/samsung.com-coupons.jpg';
import globalColor from '@/app/public/assets/globalColors/globalColor';

const StoreDealCardGrid = ({ dealCardData }) => {
    return (
        <>
            <Grid2 container spacing={3} justifyContent="center">
                {dealCardData?.map((deal, index) => (
                    <Grid2 key={index} size={{ lg: 3, md: 3, sm: 4, xs: 12 }}>
                        <Box
                            sx={{
                                border: `1px solid ${globalColor.mainColor}`,
                                borderRadius: '8px',
                                height: '240px',
                                width: "100%",
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease-in-out',
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            {/* Image Container */}
                            <Box
                                sx={{
                                    height: "200px",
                                    width: "100%", // Ensure the image container takes the full width
                                    display: 'flex', // Add flex to center the image
                                    justifyContent: 'center',
                                    overflow: "hidden",
                                    position: 'relative', // Relative positioning to allow Image to be absolute
                                }}
                            >
                                <Image
                                    src={deal.imgSrc ? deal.imgSrc : dealBanner}
                                    alt="Deal Banner"
                                    fill
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"  // Set sizes for different breakpoints
                                    style={{
                                        width: '100%', // Ensure image adapts to container size
                                        height: '100%',
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>

                            {/* Divider */}
                            <Divider sx={{ mb: 1 }} />

                            {/* Store Title */}
                            <Typography sx={{ textAlign: 'center' }}>
                                {deal.storeTitle ? deal.storeTitle : "Store Name"}
                            </Typography>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>

        </>
    );
};

export default StoreDealCardGrid;
