import { Box, Container } from '@mui/material'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <>
            <Container>
                <Box sx={{ boxShadow: 5, padding: { md: "30px", sm: "20px", xs: "10px" }, borderRadius: "10px" }}>
                    <div style={{ padding: '20px' }}>
                        <h1 style={{ color: '#ffa32d', marginBottom: '20px' }}>Privacy Policy</h1>
                        <p>
                            We are committed to ensuring that your privacy is protected. This privacy policy outlines how we handle the
                            collection, use, and protection of your personal information when you access our site and services. By using the
                            site, you agree to the terms set forth in this policy.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Definitions</h2>
                        <p>
                            <strong>Account:</strong> A personal account you create to access our services.
                            <br />
                            <strong>Services:</strong> Refers to Codesaction (referred to as "We," "Us," or "Our" in this policy).
                            <br />
                            <strong>Cookies:</strong> Small files that store your browsing history.
                            <br />
                            <strong>Device:</strong> Any technology used to access the website, such as smartphones, tablets, or computers.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Collection and Use of Personal Information</h2>
                        <h3 style={{ marginTop: '20px' }}>What is Personal Information?</h3>
                        <p>
                            Personal information refers to data that can identify you, such as your username, email address, or any other
                            identifiable information. This policy does not apply to services we do not own or control or to people we do not
                            manage.
                        </p>

                        <h3 style={{ marginTop: '20px' }}>How We Use Your Information</h3>
                        <p>
                            We collect personal information when you register for an account to improve and personalize our services. The
                            information includes:
                            <ul>
                                <li>Username, email, and password when you create an account.</li>
                                <li>Any information you post, such as comments or content uploads.</li>
                                <li>Cookies and automated data collection, including your IP address and browsing behavior.</li>
                            </ul>
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Use of Non-Personal Information</h2>
                        <p>
                            We collect non-personal information such as cookies, IP addresses, and browsing behavior to improve user
                            experience, analyze website performance, and personalize content. This data is shared with advertisers and
                            third-party analytics platforms to optimize the website’s functionality.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Security Measures</h2>
                        <p>
                            We take appropriate steps to protect your personal information from unauthorized access, alteration, or
                            destruction. While we strive to use commercially acceptable means to protect your data, no method of
                            transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>How We Use Cookies</h2>
                        <p>
                            Cookies are small files placed on your device to track browsing behavior. They help us improve the website’s
                            performance and customize your experience. You can disable cookies in your browser settings, but doing so may
                            limit certain functionalities on the site.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Sharing Information</h2>
                        <p>
                            We may share your personal information with:
                            <ul>
                                <li>Service Providers: Companies who help us operate our site and provide services, such as website hosting, analytics, and advertising.</li>
                                <li>Affiliates and Partners: Organizations that help us create content and improve user experience.</li>
                                <li>Legal Authorities: We may share your information if required by law or if necessary to comply with a legal investigation.</li>
                            </ul>
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Your Rights</h2>
                        <p>
                            You have the right to access, modify, or delete your personal information at any time. You can also request that
                            we stop processing your data or withdraw your consent for us to contact you.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Third-Party Links</h2>
                        <p>
                            Our site contains links to external websites. We are not responsible for the privacy practices or content of
                            these external sites, and we encourage you to read their privacy policies.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Affiliate Disclosure</h2>
                        <p>
                            We may earn commissions from third-party affiliate programs when you make purchases through links on our site.
                            However, we do not endorse any products or services beyond what is necessary for partnership programs.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginTop: '30px' }}>Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy periodically by posting a notice on the site or sending you an email. Please
                            check back regularly to stay informed about any updates.
                        </p>

                        <p>
                            By continuing to use the site after changes are posted, you agree to the revised privacy policy.
                        </p>
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default PrivacyPolicy 
