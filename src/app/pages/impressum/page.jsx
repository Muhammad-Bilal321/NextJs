import globalColor from '@/app/public/assets/globalColors/globalColor'
import { Box, Button, Container, Grid2, TextField, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'

const page = () => {
    return (
        <>
            <Container>
                <Box sx={{ boxShadow: 5, padding: "30px", borderRadius: "10px" }}>
                    <Typography variant='h3' component={"h1"} sx={{ fontSize: "32px", textDecoration: "underline" }}>
                        Impressum
                    </Typography>

                    <Box sx={{ paddingY: "20px" }}>
                        <Grid2 container justifyContent={{ md: "space-between", xs: "center" }}>
                            <Grid2 size={{ md: 6 }}>
                                <form action="">
                                    <TextField type='text' label="Your Name" fullWidth color='warning' sx={{ marginY: "10px", padding: "0px" }} />
                                    <TextField type='email' label="Your Email" fullWidth color='warning' sx={{ marginY: "10px", padding: "0px" }} />
                                    <TextField type='text' label="Your Subject" fullWidth color='warning' sx={{ marginY: "10px", padding: "0px" }} />
                                    <TextField type='text' label="Your Message / Qusetion" fullWidth color='warning' sx={{ marginY: "10px", padding: "0px" }} multiline rows={5} />
                                    <Button type='submit' sx={{ width: "100%", fontWeight: "bold", backgroundColor: globalColor.mainColor, color: globalColor.secondaryColor }}>Send</Button>
                                </form>
                            </Grid2>
                            <Grid2 size={{ md: 4 }}>
                                <Box>
                                    <Box sx={{ textAlign: "center", marginY: "10px" }}>
                                        <LocationOnIcon sx={{ fontSize: { md: "4em", sm: "3em", xs: "2em" }, color: globalColor.mainColor }} />
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            Codesaction INC. 69 ORMONDE BLVD VALLEY STREAM, NY 11580
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: "center", marginY: "10px" }}>
                                        <PhoneIcon sx={{ fontSize: { md: "4em", sm: "3em", xs: "2em" }, color: globalColor.mainColor }} />
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            +01 23 456 789
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: "center", marginY: "10px" }}>
                                        <EmailIcon sx={{ fontSize: { md: "4em", sm: "3em", xs: "2em" }, color: globalColor.mainColor }} />
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            info@Codesaction.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default page
