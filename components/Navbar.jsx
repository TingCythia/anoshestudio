import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, } from "react-icons/ai";
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import logo from "../image/logo.jpg";
import Image from 'next/image';


function Navbar() {

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (


        <div>
            <div className='navbar-container'>

                <div>
                    <Link href={"/"}>
                        <Image className='logo'
                            alt='logo picture'
                            src={logo} />
                    </Link>

                </div>




                {/*                     <Link href={"./FooterBanner.jsx"}>
                        <button type='button' className='cart-icon'>
                            About Us
                        </button>
                    </Link> */}

                <div className='rightNavbar'>




                    <Link href={"/store"}>
                        <button type='button' className='cart-icon'>
                            Store
                        </button>
                    </Link>


                    <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                        <AiOutlineShopping />
                        <span className='cart-item-qty'>{totalQuantities}</span>
                    </button>

                    {showCart && <Cart />}


                </div>
            </div>
        </div>


    )
}

export default Navbar