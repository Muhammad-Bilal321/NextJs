import brandLogo from '@/app/public/assets/images/kontidor.png'
import offerCard from "@/app/public/assets/images/qure.png"
import categoryCard from '@/app/public/assets/images/kontidor.png';

export const productCardData = [
    {
        offerType: "Code",
        img: brandLogo,
        offerTitle: "Get 10% Off Sitewide",
        expirationDate: "2025-12-31",
        buttonTitle: "Copy Code",
    },
    {
        offerType: "Deal",
        img: brandLogo,
        offerTitle: "Get 10% Off Sitewide",
        expirationDate: "2025-12-31",
        buttonTitle: "Get Deal",
    },
    {
        offerType: "Code",
        img: brandLogo,
        offerTitle: "Get 10% Off Sitewide",
        expirationDate: "2025-12-31",
        buttonTitle: "Copy Code",
    },
    {
        offerType: "Code",
        img: brandLogo,
        offerTitle: "Get 10% Off Sitewide",
        expirationDate: "2025-12-31",
        buttonTitle: "Copy Code",
    },
];
export const dealsData = [
    { imgSrc: brandLogo, storeTitle: 'Store 1' },
    { imgSrc: brandLogo, storeTitle: 'Store 2' },
    { imgSrc: brandLogo, storeTitle: 'Store 3' },
    { imgSrc: brandLogo, storeTitle: 'Store 3' },
    { imgSrc: brandLogo, storeTitle: 'Store 3' },
    { imgSrc: brandLogo, storeTitle: 'Store 3' },
];

export const imagesData = [
    { src: brandLogo, alt: 'Logo Image' },
    { src: brandLogo, alt: 'Brand Image 1' },
    { src: brandLogo, alt: 'Brand Image 1' },
    { src: brandLogo, alt: 'Brand Image 1' },
    { src: brandLogo, alt: 'Brand Image 1' },
    { src: brandLogo, alt: 'Brand Image 2' }
];

export const breakpointsConfig = {
    1024: {
        perPage: 3,
        gap: '1rem',
    },
    640: {
        perPage: 2,
        gap: '0.5rem',
    },
    576: {
        perPage: 2,
        gap: '0.5rem',
    },
};

export const cardData = [
    {
        imgSrc: offerCard,
        title: "5 Essential Camping Accessories from White Duck Outdoors"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
    {
        imgSrc: offerCard,
        title: "Apparel And Clothing"
    },
]

export const categoryCardData = [
    {
        imgSrc: categoryCard,
        title: "Apparel And Clothing",
        typo: "Coupon & Promo Codes"
    },
    {
        imgSrc: categoryCard,
        title: "Footwear",
        typo: "Discount & Deals"
    },
    {
        imgSrc: categoryCard,
        title: "Accessories",
        typo: "Special Offers"
    },
    {
        imgSrc: categoryCard,
        title: "Electronics",
        typo: "Exclusive Discounts"
    },
    {
        imgSrc: categoryCard,
        title: "Home & Garden",
        typo: "Best Deals"
    },
    {
        imgSrc: categoryCard,
        title: "Toys & Games",
        typo: "Promo Codes"
    },
    {
        imgSrc: categoryCard,
        title: "Books & Media",
        typo: "Savings & Offers"
    },
];

export const footerMenu = [
    { label: 'About Us', path: '/pages/about' },
    { label: 'Privacy Policy', path: '/pages/policy' },
    { label: 'Terms & Conditions', path: '/pages/term' },
    { label: 'Impressums', path: '/pages/impressum' },
    { label: 'Promotions', path: '/pages/home' },
];

export const uppercaseAlphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
export const navLinks = ["/", "/pages/home", "/pages/allstores", "/pages/allcategories", "/pages/about", '/pages/storesingle', '/pages/policy', '/pages/term', '/pages/impressum', '/pages/categorysingle'];
export const blogsApi = "https://react.atruview.com/api/blogs?token=awc2asoc=-1d1=-2-e13=d32mcmksci23kasnqwasadn3";
export const categoryApi = 'https://react.atruview.com/api/blog/categories?token=awc2asoc=-1d1=-2-e13=d32mcmksci23kasnqwasadn3'
export const allCategories = 'http://react.atruview.com/api/stores/categories?token=awc2asoc=-1d1=-2-e13=d32mcmksci23kasnqwasadn3'
export const storeApi = 'http://react.atruview.com/api/stores?token=awc2asoc=-1d1=-2-e13=d32mcmksci23kasnqwasadn3'
export const defaultImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="
