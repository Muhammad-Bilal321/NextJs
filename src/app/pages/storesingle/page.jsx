'use client'
import { Container, Grid, Typography, Button, Box, SvgIcon, Grid2, Divider } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import couponImg from '@/app/public/assets/images/kontidor.png'
import globalColor from '@/app/public/assets/globalColors/globalColor';
import Image from 'next/image';
import { useState, React } from 'react';
import CouponModal from '@/app/components/CouponModal/CouponModal';

const PromotionsSection = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Container maxWidth={"lg"}>
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Column with Image and Button */}
                    <Grid2 size={{ xs: 12, md: 4, lg: 2 }} textAlign="center">
                        <Box sx={{ mt: 5, border: 1, p: 3, borderColor: 'black' }}>
                            <img
                                src="https://www.blogfiliates.com/promotions/images/stores/bulbhead.png"
                                alt="Bulbhead"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </Box>
                        <Button variant="outlined" color="error" sx={{ mt: 3, width: '100%', fontWeight: "bold" }}>
                            VISIT STORE
                        </Button>
                    </Grid2>

                    {/* Right Column with Text and Icon */}
                    <Grid2 size={{ xs: 12, md: 8, lg: 10 }}>
                        <Typography variant="h4" component="h1" sx={{ mt: 5, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
                            BULBHEAD COUPONS & PROMO CODES
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 3, borderBottom: 1, borderColor: 'gray', pb: 4, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
                            BulbHead is the home of bright ideas; a place where you're sure to find something for everyone! So if you're looking for smart solutions for everyday problems, you've come to the right place. Our team of researchers is searching tirelessly throughout the world for just the right products...
                        </Typography>
                        <Box>
                            <Typography variant="h5" sx={{ ml: 2, mt: 1, display: "flex", alignItems: "center", fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                <RemoveRedEyeIcon sx={{ fontSize: "2.2rem", marginRight: "10px" }} />
                                981
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>

                {/* Coupon Section */}
                <Box sx={{ mt: 5, pt: 5, borderRadius: "5px" }}>
                    <Grid2 container spacing={2}>
                        {/* Left Section with Coupons */}
                        <Grid2 size={{ xs: 12, md: 8 }}>
                            <Typography variant="h4" component="h2" fontWeight="bold" fontSize={{ xs: '1.6rem', md: '2rem' }}>
                                Adidas SG Coupons & Promo Codes <span style={{ fontWeight: 'normal' }}>July 2024</span>
                            </Typography>

                            {/* Promo Cards */}
                            {[...Array(2)].map((_, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexWrap: "wrap", mb: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
                                    <Box sx={{ mr: 3, textAlign: 'center' }}>
                                        <Image
                                            src={couponImg}
                                            alt="Promo"
                                            style={{ width: "100%", height: 150, borderRadius: '8px' }}
                                        />
                                    </Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" fontWeight="bold" fontSize={{ xs: '1rem', md: '1.3rem' }}>
                                            Black Friday Sale! Get 20% Off Sitewide
                                        </Typography>
                                        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap={"wrap"} sx={{ mt: 2 }}>
                                            <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '1rem' }}>
                                                <small>End 2026-12-31</small>
                                            </Typography>
                                            <Button onClick={handleOpen} variant={index === 0 ? "contained" : "outlined"} color={index === 0 ? "warning" : "error"} sx={{ px: 5, py: 1, backgroundColor: index === 0 ? globalColor.mainColor : "", color: index === 0 ? "#000" : "", fontWeight: "bold" }}>
                                                {index === 0 ? "Get Code" : "Get Deals"}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Grid2>

                        {/* Related Stores Section */}
                        <Grid2 size={{ xs: 12, md: 4 }}>
                            <Box sx={{ boxShadow: 3, borderRadius: 2, p: 4 }}>
                                <Typography variant="h5" sx={{ mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                    RELATED STORES
                                </Typography>
                                {[...Array(10)].map((_, index) => (
                                    <Button key={index} variant="text" color="warning" sx={{ textAlign: 'left', mb: 2 }}>
                                        DreamCloud
                                    </Button>
                                ))}
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>

            </Container>

            {open &&
                <CouponModal open={open} onClose={handleClose} />
            }
        </>
    );
};

export default PromotionsSection;
