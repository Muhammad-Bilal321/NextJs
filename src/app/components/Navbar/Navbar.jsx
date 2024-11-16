"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import globalColor from "@/app/public/assets/globalColors/globalColor";
import { Box, Button, Collapse, Container, Typography } from "@mui/material";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBox from "../SearchBox/SearchBox";
import { useLinkMenu } from "@/app/public/context/context";
import { navLinks } from "@/app/public/utils/constant";


// Default link menu
const defaultMenu = [
    { name: "Home", slug: "/" },
    { name: "Feature Stores", slug: "/pages/allstores" },
    { name: "Categories", slug: "/pages/allcategories" },
    { name: "Blog", slug: "/pages/allblogs" },
    { name: "About Us", slug: "/pages/about" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { linkMenu, loading } = useLinkMenu();
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Determine which menu to show based on the current path
    const currentMenu = navLinks.includes(pathname) || loading ? defaultMenu : linkMenu;

    return (
        <Box sx={{ backgroundColor: globalColor.mainColor, width: "100%" }}>
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "0 auto",
                    padding: "10px 20px",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                {/* Logo Section */}
                <Box>
                    <Link href="/">
                        <Image
                            src={logo}
                            width={200}
                            priority={true}
                            loading="eager"
                            alt="logo"
                            sx={{
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.1)" },
                            }}
                        />
                    </Link>
                </Box>

                {/* Search Section */}
                <Box>
                    <SearchBox />
                </Box>
            </Container>

            {/* Hamburger Icon for Mobile */}
            <Container
                sx={{
                    display: { xs: "block", sm: "none", backgroundColor: globalColor.secondaryColor, padding: "5px" },
                }}
            >
                <Button aria-label="toggler" color="warning" sx={{ border: `1px solid ${globalColor.mainColor}` }} onClick={toggleMenu}>
                    <MenuIcon sx={{ color: globalColor.mainColor }} />
                </Button>
            </Container>

            {/* Mobile Menu Section */}
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                <Box sx={{ backgroundColor: globalColor.secondaryColor, width: "100%", padding: "15px 0" }}>
                    <Typography
                        component="ul"
                        sx={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#fff",
                        }}
                    >
                        {currentMenu.map((link, i) => (
                            <Typography
                                component="li"
                                key={i}
                                sx={{
                                    width: "90%",
                                    paddingX: "10px",
                                    paddingY: "10px",
                                    textAlign: "center",
                                }}
                            >
                                <Link href={pathname === "/pages/allblogs" ? `/pages/allblogs/categories/${link.slug}` : link.slug}>
                                    <Button
                                        variant="contained"
                                        aria-label="Click me"
                                        sx={{
                                            width: "100%",
                                            backgroundColor: pathname === link.slug ? globalColor.mainColor : "transparent", // Active state
                                            fontWeight: "bold",
                                            transition: "background-color 0.5s ease, transform 0.5s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: globalColor.mainColor,
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        {link.name}
                                    </Button>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>
                </Box>
            </Collapse>

            {/* Desktop Menu Section */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Box sx={{ backgroundColor: globalColor.secondaryColor, width: "100%", padding: "15px 0" }}>
                    <Typography
                        component="ul"
                        sx={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "center",
                            color: "#fff",
                            flexDirection: "row",
                        }}
                    >
                        {currentMenu.map((link, i) => (
                            <Typography
                                component="li"
                                key={i}
                                sx={{
                                    paddingX: { xs: "10px", md: "20px" },
                                    textAlign: "center",
                                }}
                            >
                                <Link href={pathname === "/pages/allblogs" ? `/pages/allblogs/categories/${link.slug}` : link.slug}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: pathname === link.slug ? globalColor.mainColor : "transparent", // Active state
                                            fontWeight: "bold",
                                            transition: "background-color 0.5s ease, transform 0.5s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: globalColor.mainColor,
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        {link.name}
                                    </Button>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
