'use client'
import { useEffect, useState } from 'react';
import { Modal, Box, Typography, IconButton, Button, InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SubscribeModal = () => {
    // State for controlling the modal open/close
    const [open, setOpen] = useState(false);

    // Function to set a cookie
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    // Function to get a cookie value by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Handle open modal if the cookie is not set
    useEffect(() => {
        if (!getCookie('subscribedOrClosed')) {
            setTimeout(() => setOpen(true), 3000);
        }
    }, []);

    // Handle close modal and set cookie
    const handleClose = () => {
        setCookie('subscribedOrClosed', 'true', 30); // Cookie expires in 30 days
        setOpen(false);
    };

    // Handle subscribe action and set cookie
    const handleSubscribe = () => {
        setCookie('subscribedOrClosed', 'true', 30); // Set the same cookie on subscribe
        console.log('Subscribed');
        setOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box
                    sx={{
                        maxWidth: 750,
                        width: '100%',
                        bgcolor: '#ffa32d', // Custom Background color
                        borderRadius: '16px', // Rounded corners
                        p: 3,
                        position: 'relative',
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Modal Content */}
                    <Box textAlign="center" mt={2}>
                        <Typography
                            id="modal-title"
                            variant="h4"
                            component="h2"
                            sx={{ color: 'dark', fontWeight: 'bold' }}
                        >
                            Stay in the loop with Codesaction!
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'dark', mt: 1 }}>
                            Sign up for top-notch shopping advice
                        </Typography>

                        {/* Input and Subscribe Section */}
                        <Box
                            sx={{
                                mt: 4,
                                mb: 2,
                                display: 'flex',
                                bgcolor: 'lightgrey',
                                borderRadius: '50px',
                                overflow: 'hidden',
                            }}
                        >
                            <InputBase
                                placeholder="Email Address"
                                sx={{
                                    flex: 1,
                                    px: 2,
                                    py: 1,
                                    borderRadius: '50px 0 0 50px',
                                    bgcolor: '#fff',
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '0 50px 50px 0',
                                    backgroundColor: 'dark', // Button dark color
                                    color: 'white',
                                    px: { xs: 2, md: 4 },
                                }}
                                onClick={handleSubscribe} // Set cookie on subscribe
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SubscribeModal;
