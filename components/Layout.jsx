import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Script from 'next/script'
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
            </footer>
        </div>
    )
}

export default Layout