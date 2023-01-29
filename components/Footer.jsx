import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';



function Footer() {
    return (
        <>

            <div className='footer-container'>

                <div className='boxleft'>

                    <h3>Help</h3>

                    <Link href={"/return"}>
                        <div className=''>
                            <p>Return and refund</p>
                        </div>
                    </Link>

                    <Link href={"/betalning"}>
                        <div className=''>
                            <p>Payment and delivery </p>
                        </div>
                    </Link>

                    <Link href={"/policy"}>
                        <div className=''>
                            <p>Private policy</p>
                        </div>
                    </Link>


                </div>

                <div className='boxmellan'>
                    <h3>Contact</h3>

                    <div className='adress'>
                        <p>Adress:Anders Personsgatan 18</p>
                        <p>Telefone: 0734563535</p>
                        <p>Email: Anoshe@gmail.com</p>

                    </div>
                </div>

                <div className='boxright'>

                    <h3>Follow us</h3>

                    <p className='icons'>
                        <AiFillInstagram />
                        <AiOutlineTwitter />
                        <AiFillFacebook />
                    </p>
                </div>

            </div>









        </>

    )
}

export default Footer
