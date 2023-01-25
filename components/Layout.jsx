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
                <CookieConsent debug={true}>
                    This site is demo store, shopping function is not active, you can experience test shopping method. This site uses cookies. See our <Link href="/policy" style={{ textDecoration: "underline" }}> privacy policy </Link>for more.
                </CookieConsent>
            </footer>
        </div>
    )
}

export default Layout