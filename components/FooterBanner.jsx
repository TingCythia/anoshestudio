import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

function FooterBanner({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc } }) {
    return (

        <div className='footer-banner-container' >
            <div className='banner-desc' >
                <div className='left'>

                    <h3>{largeText1} </h3>
                    <h3>{largeText2}</h3>
                    <p>{saleTime}</p>
                </div>
                <div className='right'>
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/readmore`}>
                        <button type='button'>
                            {buttonText}
                        </button>
                    </Link>
                </div>
                <div className="footer-banner-image">
                    <img
                        width="250px"
                        height="auto"
                        src={urlFor(image)}
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterBanner