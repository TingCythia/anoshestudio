import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';


 
function Footer() {
    return (






        
       <div className='footer-container'>

 <div className='boxleft'>


<p>Hjälp</p>

  <Link href={"/policy"}>  
<div className=''>
    <h5>Policy</h5>
</div>
</Link>

<Link href={"/betalning"}>  
<div className=''>
    <h5>Betalning och leverans</h5>
</div>
</Link>

</div>


            <p>2023 Anoshestudio All rights reserved</p>


            <div className='boxright'>
            <p className='icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>

          </div>
 
        </div>

 


    )
}

export default Footer
