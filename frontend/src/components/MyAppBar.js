import React, { useState, useEffect }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom'
import { isLoggedIn, isAdmin, doLogout } from '../service/Auth';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function MyAppBar() {
  const [filter,setFilter]=useState("");
  const navigate = useNavigate();
  const data = useSelector((store) => store.cart.data)

  useEffect(()=>{
    let searchParams = new URLSearchParams();
      if(filter){
        searchParams.set("name",filter);
      }
      navigate({
        pathname:"/products",
        search:searchParams.toString()
      })
  },[filter])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Neostore E-Shop
          </Typography>
          {isLoggedIn() && (
            <Box sx={{flexGrow: 1, display: "flex", alignItems: "center", borderRadius: "5px", backgroundColor: "#fff", opacity: 0.9}}>
              <SearchIcon style={{color: "#222"}} />
              <TextField sx={{border: "none", outline: "none", width: "100%", p:0, borderRadius: 2}}  onChange={(event)=> setFilter(event.target.value)} id="search" placeholder="Search" size="small" variant="outlined" />
            </Box>
          )}
          {!isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
              <Button color="inherit" onClick={() => navigate("/signup")}>SignUp</Button>
            </>
          )}
          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            </>
          )}
          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate("/products")}>Products</Button>
            </>
          )}
          {isLoggedIn() && isAdmin() && (
            <>
              <Button color="inherit" onClick={() => navigate("/addproduct")}>Add Product</Button>
            </>
          )}
          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={() => navigate("/cart")} >
                Cart
                <Badge sx={{mx: 1}} badgeContent={data.length} color="success">
                  <ShoppingCartIcon />
                </Badge>
              </Button>

            </>
          )}
          {isLoggedIn() && (
            <>
              <Button color="inherit" onClick={doLogout}>Logout</Button>
            </>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
