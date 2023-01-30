import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, } from "react-icons/ai";
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';
import logo from "../image/logo.jpg";
import Image from 'next/image';


const Navbar = () => {

    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };
    return (
        <nav className='navbar-container'>
            <div className="logoDiv">
                <Link href="/">
                    <Image className='logo'
                        alt='logo picture'
                        src={logo} />
                </Link>
            </div>
            <ul className={`nav-links ${showLinks ? 'show-links' : ''}`}>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/store">
                        Store
                    </Link>
                </li>
                <li>
                    <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                        <AiOutlineShopping />
                        <span className='cart-item-qty'>{totalQuantities}</span>
                    </button>

                    {showCart && <Cart />}
                </li>
            </ul>
            <div className="burger" onClick={handleToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar