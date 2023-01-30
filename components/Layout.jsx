import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Script from 'next/script';
import Link from 'next/link';
import { CookieConsent } from 'react-cookie-consent';
const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <Script src="https://example.com/script.js" />
                <title>Anoshe Studio</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
                <CookieConsent
                    enableDeclineButton
                    expires={150}
                    cookieName="AnosheStudio cookie">
                    By clicking “Accept all cookies”, you agree Anoshe can store cookies on your device and disclose information in accordance with our <Link href="/policy" style={{ textDecoration: "underline" }}> privacy policy </Link>for more.
                </CookieConsent>
            </footer>
        </div>
    )
}

export default Layout