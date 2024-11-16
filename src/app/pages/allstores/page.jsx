// src/components/BrandsSection.jsx
import { Container } from '@mui/material';
import BrandSection from '@/app/components/AllStoreList/BrandSection';


const AllStores = () => {

    const brandData = {
        A: Array(10).fill({ name: 'A Box of Stories UK', href: '#' }),
        B: Array(10).fill({ name: 'B Box of Stories UK', href: '#' }),
    };

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            {
                Object.entries(brandData).map(([title, brands]) => (
                    <BrandSection key={title} title={title} brands={brands} />
                ))
            }

        </Container>
    );
};

export default AllStores;
