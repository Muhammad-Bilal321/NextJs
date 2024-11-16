'use client'
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import StoreList from './StoreList';

const BrandSection = ({ title, brands }) => {
    return (
        <Paper elevation={3} sx={{ mb: 5, borderRadius: "10px", borderColor: '#000', }}>
            <Box
                sx={{
                    border: '1px solid #000',
                    borderColor: 'grey.300',
                    backgroundColor: 'warning.light',
                    paddingTop: 2,
                    paddingStart: 5,
                    marginTop: 5,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px"

                }}
            >
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', paddingBottom: "10px", marginX: "30px" }}>
                    {title}
                </Typography>
            </Box>
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'grey.300',
                    paddingX: 3,
                    paddingY: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px"
                }}
            >
                <Grid container>
                    {[0, 1, 2].map((col) => (
                        <Grid
                            item
                            key={col}
                            xs={12}
                            md={4}
                            sm={6}
                            sx={{
                                borderRight: col < 2 ? '1px solid' : 'none',
                                borderColor: 'grey.300',
                                paddingX: 1,
                            }}
                        >
                            <StoreList brands={brands} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Paper>
    );
};

export default BrandSection;
