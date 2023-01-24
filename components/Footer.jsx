import React from 'react'
import { AiFillInstagram, AiOutlineTwitter,AiFillFacebook } from 'react-icons/ai'
import Link from 'next/link';



function Footer() {
    return (


        <div className='footer-container'>
 
 <div className='boxleft'>
    
<h3>Hjälp</h3>

  <Link href={"/policy"}>  
<div className=''>
    <p>Retur och återbetalning</p>
</div>
</Link>

<Link href={"/betalning"}>  
<div className=''>
    <p>Betalning och leverans</p>
</div>
</Link>

<Link href={"/betalning"}>  
<div className=''>
    <p>Regler och villkor</p>
</div>
</Link>


</div>

<div className='boxmellan'>
            <h3>Kontakt</h3>

            <div className='adress'>
           <p>Adress:Anders Personsgatan 18</p> 
            <p>Telefon: 0734563535</p>
            <p>Email: Anoshe@gmail.com</p>
               
            </div>
          </div>

            <div className='boxright'>

                <p className='icons'>
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                </p>

            </div>

        </div>



            <h3>Follow oss</h3>

            <p className='icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiFillFacebook/>
            </p>

          </div>
    
        </div>



    )
}

export default Footer
