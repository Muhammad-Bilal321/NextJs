import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    TextField,
    Box,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import globalColor from '@/app/public/assets/globalColors/globalColor';

const CouponModal = ({ open, onClose }) => {


    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Typography variant="h4" component={"h1"} sx={{ color: globalColor.mainColor, margin: 0 }}>
                            ICARRYALLS PROMO CODES & COUPON
                        </Typography>
                    </Box>
                    <Box >
                        <IconButton
                            edge="end"
                            color="warning"
                            onClick={onClose}
                            aria-label="close"
                            style={{ position: 'absolute', right: 8, top: 8, marginRight: 0, marginTop: "10px", border: `1px solid ${globalColor.mainColor}` }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#fff", textAlign: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>GET 10% OFF ANY ORDER</Typography>
                <Box my={2}>
                    <img
                        src="https://www.theshoppingeaze.com/promotions/images/stores/bulbhead.png"
                        alt=""
                        style={{ width: '100%', maxWidth: '300px', border: '1px solid black', padding: '4px' }}
                    />
                </Box>
                <Button variant="contained" color="primary" size="large" sx={{ padding: '8px 24px', backgroundColor: globalColor.mainColor, color: globalColor.secondaryColor, fontWeight: "bold" }}>
                    VISIT STORE
                </Button>
                <Typography variant="h6" style={{ marginTop: '16px', borderTop: '1px solid', padding: '16px 0' }}>
                    CLICK TO COPY CODE
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
                    <TextField
                        disabled
                        variant="outlined"
                        value="SURPRISE10"
                        style={{ textAlign: 'center', padding: '8px 24px', }}
                    />
                    <Button variant="contained" color="primary" size="large" sx={{ padding: '8px 24px', backgroundColor: globalColor.mainColor, color: globalColor.secondaryColor, fontWeight: "bold", marginY: "10px" }}>
                        COPY TO CLIPBOARD
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CouponModal;
