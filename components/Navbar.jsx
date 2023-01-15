import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai"
function Navbar() {
    return (
        <div>
            <div className='navbar-container'>
                <p className='logo'>
                    <Link href={"/"}>
                        Anoshe Studio
                    </Link>
                </p>

                <button type='button' className='cart-icon' onClick="">
                    <AiOutlineShopping />
                    <span className='cart-item-qty'> 1</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar