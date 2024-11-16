import React from 'react'

const Skeleton = () => {
    return (


        <>
            <Skeleton variant="text" sx={{ fontSize: "46px", width: "80%", my: 1 }} />
            <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: "4px", my: 2 }} />
            <Skeleton variant="text" width="20%" sx={{ fontWeight: "bold", my: 1 }} />
            <Skeleton variant="text" sx={{ fontSize: "18px", width: "90%", my: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "16px", width: "100%", my: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "16px", width: "100%", my: 2 }} />
        </>


    )
}

export default Skeleton
