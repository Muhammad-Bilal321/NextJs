import { Box, Container } from '@mui/material'
import offerCard from '@/app/public/assets/images/qure.png'
import Image from 'next/image'
import React from 'react'

const AdSection = () => {
    return (
        <>
            <Box>
                <Image
                    src={offerCard}
                    alt="banner img"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"  // Set sizes for different breakpoints
                    style={{ objectFit: 'cover', width: "100%", maxHeight: "500px" }}  // Ensure objectFit is applied via styles
                    loading="lazy"  // Enable lazy loading for performance
                />

            </Box>
        </>
    )
}

export default AdSection
