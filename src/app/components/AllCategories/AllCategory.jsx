'use client';
import React from 'react';
import { Box, Container, Typography, Skeleton } from '@mui/material';
import CategoryCard from './CategoryCard';

const AllCategory = ({ loading, cardData }) => {
    // Only sort and group data if loading is complete
    const sortedData = !loading ? cardData.sort((a, b) => a.name.localeCompare(b.name)) : [];
    const groupData = !loading
        ? sortedData.reduce((acc, item) => {
            const firstLetter = item.name[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(item);
            return acc;
        }, {})
        : {};

    return (
        <Box>
            {/* Title */}
            {loading ? (
                <Skeleton variant="text" width="40%" height={80} sx={{ margin: '0 auto', marginBottom: '20px' }} />
            ) : (
                <Typography variant="h1" sx={{ fontSize: "36px", textDecoration: "underline", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
                    All Categories
                </Typography>
            )}

            <Container>
                {/* Display Skeletons when loading */}
                {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <Box key={index} sx={{ marginBottom: "30px" }}>
                            <Skeleton variant="text" width="20%" height={40} sx={{ marginX: "30px", marginBottom: "10px" }} />
                            <Skeleton variant="rectangular" width="100%" height={200} />
                        </Box>
                    ))
                ) : (
                    // Iterate over each letter section once data is loaded
                    Object.keys(groupData).sort().map((letter) => (
                        <Box key={letter} sx={{ marginBottom: "30px" }}>
                            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', paddingBottom: "10px", marginX: "30px" }}>
                                {letter}
                            </Typography>
                            <Box sx={{ marginBottom: "20px" }}>
                                <CategoryCard cardData={groupData[letter]} />
                            </Box>
                        </Box>
                    ))
                )}
            </Container>
        </Box>
    );
};

export default AllCategory;
