import { Box, Container } from '@mui/material'
import React from 'react'

const TermsCondition = () => {
    return (
        <>
            <Container>
                <Box sx={{ boxShadow: 5, padding: { md: "30px", sm: "20px", xs: "10px" }, borderRadius: "10px" }}>
                    <div style={{ padding: "20" }}>

                        <h1 style={{ color: '#ffa32d', marginBottom: '20px' }}>Terms and Conditions</h1>

                        <p style={{ marginBottom: '20px' }}>
                            The following are the terms for Codesaction. Please review the following guidelines regarding your use and access to our site. By using or accessing our site and any services, you agree to be bound by these terms. If you do not agree to these terms, you are prohibited from using our services or accessing our site.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            Codesaction may change these terms at any time and may modify, add, or suspend any part of the services at its discretion. Your acceptance of such changes is acknowledged through your continued use of or access to the services following the posting of any updates.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>Confirmation of the Designs for the Heading</h2>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                            <li>
                                If you are a client, this section explains the agreement between you and us. By accessing the site, you acknowledge that you have read, understood, and agree to be bound by these terms. The site is provided to you subject to your acceptance of these Terms of Use. Please read the following terms before using the site. You agree to these terms if you use the site after reading them.
                            </li>
                            <li>
                                You should immediately stop using the site if you do not agree with these terms. We maintain the right to terminate, suspend, or revoke your access to your account or any services we provide on the site.
                            </li>
                            <li>
                                We may change these terms and policies by posting a notice on the site or sending you an email. You agree to be bound by such changes or revisions. All changes will be effective once they are posted. You can check for updates to our terms by regularly visiting this page.
                            </li>
                        </ul>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>User Accounts</h2>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                            <li>
                                A client account is created free of charge. By creating a client account, you agree to these terms of service. You must provide a valid username, email address, and other required information during the registration process. You are responsible for keeping your account and password secure and for all activity under your account.
                            </li>
                            <li>
                                We will not sell or rent your information to third parties for marketing purposes.
                            </li>
                            <li>
                                A client account may be terminated, suspended, or limited. Any balance on the account will remain outstanding unless canceled by the client. We reserve the right to reassign your username if we close, suspend, or limit your account.
                            </li>
                        </ul>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>User-Posted Content</h2>
                        <p style={{ marginBottom: '20px' }}>
                            By uploading content to our server, you ensure that it (a) does not infringe on any intellectual property rights or other legal rights, (b) is not defamatory, and (c) does not contain harmful or malicious viruses. You are responsible for all content posted via your account. We disclaim any responsibility for content posted on the site and any potential issues resulting from its use.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>Responsibility Concerning Content</h2>
                        <p style={{ marginBottom: '20px' }}>
                            All information, content, and materials on the site and services are protected by law and belong to their respective owners. We are not responsible for content provided by users or other parties.
                        </p>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>Liability Limitation</h2>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                            <li>
                                Codesaction and its employees will not be liable for any direct, indirect, incidental, or consequential damages resulting from:
                                <ul>
                                    <li>Errors in content</li>
                                    <li>Personal injury or property damage from using our services</li>
                                    <li>Unauthorized access to our servers</li>
                                    <li>Any bugs transmitted by third parties</li>
                                </ul>
                            </li>
                        </ul>

                        <h2 style={{ color: '#ffa32d', marginBottom: '10px' }}>Affiliates</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Codesaction may have financial relationships with products featured on the site. However, it is not responsible for any issues related to product purchases.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            You agree that any legal notices required by law will be considered given once they are posted on the site.
                        </p>

                    </div>
                </Box>
            </Container>
        </>
    )
}

export default TermsCondition
