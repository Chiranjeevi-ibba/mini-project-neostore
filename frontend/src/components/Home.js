import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box sx={{padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", width: "100%", minHeight: '100vh'}} >
      <Box>
        <Typography variant="h4" >Electronic <br /> eCommerce Website</Typography>
        <Typography variant='body1' >Shop Now Whatever You Need.</Typography>
        <Link style={{textDecoration: "none"}} to="/products">
        <Button sx={{margin: "16px 0px"}} variant="contained" >Shop Now</Button>
        </Link>
      </Box>
      <img width={600} src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="home" />
    </Box>
  )
}
