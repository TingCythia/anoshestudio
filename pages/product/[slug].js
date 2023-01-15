import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from "../../lib/client";
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const { decQty, incQty, qty, onAdd } = useStateContext();

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img
                            width={"50%"}
                            height={"auto"}
                            src={urlFor(image && image[0])} />
                    </div>

                </div>

                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p> (20) </p>
                        <h4>Details:</h4>
                        <p>{details}</p>
                        <p className='price'>${price}</p>
                        <p className='quantity'>
                            Quantity:
                            <span
                                className='minus'
                                onClick={decQty}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span
                                className='num'
                                onClick={""}
                            >
                                {qty}
                            </span>
                            <span
                                className='plus'
                                onClick={incQty}
                            >
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button
                            type='button'
                            className='add-to-cart'
                            onClick={() => onAdd(product, qty)}
                        >Add to cart
                        </button>
                        <button
                            type='button'
                            className='buy-now'
                            onClick={""}
                        >Check out now
                        </button>
                    </div>
                </div>
            </div>

            <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee' >
                    <div className='maylike-products-container'>
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);


    return {
        props: { products, product }
    }
}

export default ProductDetails