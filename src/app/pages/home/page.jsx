import { Box, Container, Typography, Skeleton } from '@mui/material';
import brandBgImg from "@/app/public/assets/images/qure.png";
import Image from 'next/image';
import { breakpointsConfig, dealsData, imagesData, productCardData } from '@/app/public/utils/constant';
import dynamic from 'next/dynamic'; // Import for dynamic loading
import { Suspense, React } from 'react';

// Dynamically load the components
const ProductCard = dynamic(() => import('@/app/components/ProductCard/ProductCard'), {
    loading: () => <Skeleton variant="rectangular" width="100%" height={300} />, // Show skeleton while loading
});

const DealCard = dynamic(() => import('@/app/components/DealCard/StoreDealCard'), {
    loading: () => <Skeleton variant="rectangular" width="100%" height={200} />,
});

const Carousel = dynamic(() => import('@/app/components/Carousel/Carousel'), {
    loading: () => <Skeleton variant="rectangular" width="100%" height={150} />,
});

const Home = () => {
    return (
        <>
            <Container>
                <div>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            fontWeight: "200",
                            paddingY: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" } // Responsive font size
                        }}
                    >
                        Today's Top Deals And Coupons
                    </Typography>


                    {/* ProductCard Section */}
                    <Box sx={{ marginY: "10px" }}>
                        <ProductCard productCardData={productCardData} />
                    </Box>

                    {/* Wrapping ProductCard and Banner in the same container */}
                    <Box sx={{ width: "80%", marginX: "auto" }}>
                        {/* Banner Image Section */}
                        <Box sx={{ height: "120px", width: "100%", marginY: "40px", overflow: "hidden", marginLeft: { xl: "15px" } }}>
                            <Image
                                src={brandBgImg}
                                alt={"banner img"}
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Box>


                    {/* Deal Section */}
                    <Box sx={{ marginLeft: { lg: "50px" } }}>
                        <DealCard dealCardData={dealsData} />
                    </Box>

                    {/* Carousel Section */}
                    <Box sx={{ marginLeft: { lg: "50px" }, marginY: "20px" }}>
                        <Carousel
                            images={imagesData}
                            breakpoints={breakpointsConfig}
                            perPage={4}
                            autoplayInterval={4000}
                        />
                    </Box>

                </div>
            </Container>
        </>
    );
};

export default Home;
