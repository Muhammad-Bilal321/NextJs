'use client'
import React from 'react';
import { List, ListItem, Button } from '@mui/material';
import Link from 'next/link';

const StoreList = ({ brands }) => {

    return (
        <List disablePadding>
            {brands?.map((brand, index) => (
                <ListItem key={index} disableGutters>

                    <Button
                        color='warning'
                        aria-label="link"
                        variant="text"
                        sx={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            justifyContent: 'flex-start',
                            width: '100%',
                        }}
                    >
                        <Link href={"/pages/storesingle"}>
                            {brand.name}
                        </Link>
                    </Button>

                </ListItem>
            ))
            }
        </List >
    );
};

export default StoreList;
