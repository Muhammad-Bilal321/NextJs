import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from 'next/router';
import globalColor from '@/app/public/assets/globalColors/globalColor';

const DataNotFound = () => {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#f9f9f9',
                px: 2,
            }}
        >
            <ErrorOutlineIcon sx={{ fontSize: 100, color: '#ff6f61', mb: 2 }} />

            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                Data Not Found
            </Typography>

            <Typography variant="body1" sx={{ color: '#666', mt: 1, mb: 3 }}>
                Sorry, we couldn’t find the data you were looking for. Please try again or go back to the homepage.
            </Typography>

            <Button
                href='/'
                variant="contained"
                size="large"
                sx={{
                    mt: 2,
                    px: 4,
                    textTransform: 'none',
                    borderRadius: '8px',
                    backgroundColor: globalColor.mainColor,
                    color: globalColor.secondaryColor,
                    fontWeight: "bold"
                }}

            >
                Go Back to Home
            </Button>
        </Box>
    );
};

export default DataNotFound;
