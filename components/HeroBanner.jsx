import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div className="banner-div">
                <p className="banner-solo">{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText} </h1>
                <Link href={`/store`}>
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>
            </div>
            <img src={urlFor(heroBanner.image)} alt="" className="hero-banner-image" />

            <div>

                <div className="desc">
                    <h5>{heroBanner.largeText1}</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner