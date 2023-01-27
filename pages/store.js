import React from 'react';
import { client } from '../lib/client';
import { Products } from '../components';
import { useStateContext } from '../context/StateContext';

const Store = ({ products }) => {
    const { qty, onAdd } = useStateContext();
    /*   const [value, setValue] = useState("all"); */
    return (
        <div>
            {/*             <div style={{
                display: "inline-flex",
            }}>
                <tabs value={value}>

                    <tab>
                        Best Seller
                    </tab>

                    <tab>
                        Top Rated
                    </tab>

                    <tab>
                        Editor Choice
                    </tab>

                    <tab>
                        All
                    </tab>

                </tabs>
            </div> */}
            <div className='store-products-container'>
                {products?.map((product) =>
                    <div className='store-card-contariner'>
                        <Products
                            key={product._id}
                            product={product}
                        />
                        <button
                            type='button'
                            className='add-to-cart'
                            onClick={() => onAdd(product, qty)}
                        >Add to cart
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Store

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);


    return {
        props: { products }
    }
}