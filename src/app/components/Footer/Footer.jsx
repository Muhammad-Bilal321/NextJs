'use client'
import { Box, Container, Typography, Grid, Button, TextField, IconButton, Grid2 } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, Google } from '@mui/icons-material';
import globalColor from '@/app/public/assets/globalColors/globalColor';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logo from "../../public/assets/images/logo.png"
import Link from 'next/link';
import Image from 'next/image';
import { footerMenu } from '@/app/public/utils/constant';
const Footer = () => {

    return (
        <Box component="footer" sx={{ bgcolor: "#ffa32d", pt: 4 }}>
            <Container maxWidth="lg">
                {/* Social media section */}
                <Box textAlign="center" mb={4}>
                    <IconButton

                        aria-label="facebook"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <Facebook />
                    </IconButton>
                    <IconButton

                        aria-label="twitter"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <Twitter />
                    </IconButton>
                    <IconButton

                        aria-label="google"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <Google />
                    </IconButton>
                    <IconButton

                        aria-label="instagram"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton

                        aria-label="linkedin"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <LinkedIn />
                    </IconButton>
                    <IconButton

                        aria-label="github"
                        color="inherit"
                        sx={{
                            transition: "all 0.2s ease-in-out",
                            mx: 1,
                            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                            padding: "15px",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff"
                            }
                        }}
                    >
                        <GitHub />
                    </IconButton>
                </Box>

                {/* Content and links */}
                <Grid2 container spacing={2} justifyContent="space-between" alignItems="center">
                    {/* Logo and description */}
                    <Grid2 size={{ md: 4, sm: 6, xs: 12 }} textAlign={{ xs: 'center', md: 'start' }}>
                        <Box mb={2}>
                            <Link href="./">
                                <Image
                                    src={logo}
                                    width={200}
                                    loading='lazy'
                                    alt='logo'
                                    sx={{
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease",
                                        "&:hover": { transform: "scale(1.1)" },
                                    }}
                                />
                            </Link>
                        </Box>
                        <Typography variant="body1" color="textSecondary">
                            Codesaction is an all-rounder brand where you can deal with any issues regarding your basics, necessities, attire, families, and more. We give you a primary market to satisfy your necessities enormously. Your conviction wouldn't be irritated on an amazingly more grounded stage when you stood apart from the discussions of different retailers and dealers.
                        </Typography>
                    </Grid2>

                    {/* Quick links */}
                    <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                                    Quick Links
                                </Typography>
                                {footerMenu.map((link, idx) => (
                                    <Box key={idx} display="flex" alignItems="center" mb={1}>
                                        <KeyboardArrowRightIcon />
                                        <Box >
                                            <Link href={link.path} sx={{ color: 'inherit', ml: 1, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                                <Typography sx={{ transition: 'all 0.2s ease-in-out', "&:hover": { transform: "translateX(10px)" } }}>
                                                    {link.label}
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid2>


                    {/* Newsletter form */}
                    <Grid2 size={{ md: 4, sm: 12, xs: 12 }}>
                        <Typography variant="h5" component={"p"} sx={{ paddingY: "10px", fontWeight: "bold", textAlign: "center" }}>
                            Sign up for our newsletter
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        variant="outlined"
                                        size="small"
                                        color="dark"
                                        sx={{
                                            bgcolor: 'white',
                                            borderRadius: "5px",
                                            "& .MuiInputLabel-root": {
                                                fontWeight: 'bolder',
                                            }
                                        }}
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#000" }}>
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid2>
                </Grid2>
            </Container >

            {/* Copyright Section */}
            <Box sx={{ paddingY: "40px", backgroundColor: "#000", color: globalColor.mainColor, marginTop: "40px", textAlign: "center" }}>
                <Typography variant="body2" component="p">
                    Copyright © Codesaction 2018 - 2024. All rights reserved. Contact info@Codesaction.com
                </Typography>
                <Typography variant="body2" component="p">
                    <strong>Disclosure:</strong> We may earn a commission if you use our links/Coupons.
                </Typography>
            </Box >
        </Box >
    );
};

export default Footer;
