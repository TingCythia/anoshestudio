import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Our Products</h2>
        <p> Porslin of many variations </p>
      </div>

      <div className='products-container'>
        {products?.filter((category) => category.category === "Best selling product").map((product) =>
          <Product
            key={product._id}
            product={product}
          />
        )}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[1]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home