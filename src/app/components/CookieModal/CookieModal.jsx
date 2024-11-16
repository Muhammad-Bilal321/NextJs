'use client'
import { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const CookieModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Check if user has accepted/rejected cookies on initial render
    useEffect(() => {
        const userChoice = localStorage.getItem('cookiesAccepted');
        if (!userChoice) {
            setIsOpen(true); // Show modal if no choice was made
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsOpen(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setIsOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onClose={() => { }}
            aria-labelledby="cookie-modal-title"
            aria-describedby="cookie-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center',
                }}
            >
                <Typography id="cookie-modal-title" variant="h6" component="h2">
                    We use cookies
                </Typography>
                <Typography id="cookie-modal-description" sx={{ mt: 2 }}>
                    This website uses cookies to ensure you get the best experience. Accept cookies to continue using our site.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" color="primary" onClick={handleAccept}>
                        Accept
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleReject}>
                        Reject
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CookieModal;
