'use client'
import React, { useEffect, useState } from 'react';

export const BootstrapLoader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set a delay of 3 seconds (3000 ms) or any other preferred duration
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoaded && (
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
            )}
        </>
    );
};
