/*import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';
*/

 /*
function Footer() {
    return (



<div></div>


        
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

export default Footer*/
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AiFillInstagram, AiOutlineTwitter , AiFillFacebook} from 'react-icons/ai'
import Link from 'next/link';




const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.white', color: 'grey.900' }}>

      <Container maxWidth="md" sx={{ py: 7 }}>
        <Stack spacing={4}>

       

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                <b>  Anoshe </b> 
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Our company consists of several departments involved in manufacturing and sending out our designs on a daily basis.

                  </Typography>
                
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                  <b>  Help Center </b>
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                <Link href={"/betalning"}>    
                 Betalning & leverans                  
                </Link>
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  <Link href={"/policy"}>   Retur och återbetalning </Link>
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Regler och villkor
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                  <b>  Kontakt oss </b>
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                  Anoshe Studio 
Skindergade 7, st.
1159 Goteborg
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    email: Kundservice.se@anoshe.com. 
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                   tel :046734567
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                  <b> Follow us </b>
                  </Typography>
                  <AiFillInstagram />
                <AiOutlineTwitter />
                <AiFillFacebook/>

                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'common.white',
                color: 'common.white',
                '& .MuiSelect-icon': {
                  color: 'common.white'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }}
            >
            
            </Select>
          </Box>

          <Typography variant="caption">  2023 Anoshestudio All rights reserved</Typography>

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer