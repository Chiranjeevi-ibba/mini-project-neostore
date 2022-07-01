import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { deleteCartItem, updateCart } from '../redux/cartSlice';


export default function Cart() {
  const reduxData = useSelector((store) => store.cart.data)
/*   const reduxTotalValue = reduxData.reduce((total, each) => total += parseInt(each.price), 0) */

  const data = JSON.parse(localStorage.getItem("myProCart"))
  const totalValue = data.reduce((total, each) => total += parseInt(each.price)*parseInt(each.quantity), 0)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <Container>
      <h1>Cart</h1>

      <Box sx={{ flexGrow: 1, p: 3, }}>
        <Grid container spacing={3}>
          {data?.map(pro => {

            const onClickDeleteButton = () => {
              console.log("delete fn called");
              const updatedData = data.filter(item => item._id !== pro._id)
              console.log(updatedData);
              localStorage.setItem('myProCart', JSON.stringify(updatedData))
              dispatch(deleteCartItem(updatedData))
              navigate("/cart")
            }

            const onClickIncreaseBtn = () => {
              const updatedCartData = data.map(eachInnerCart => {
                if (eachInnerCart._id === pro._id) {
                  const updatedQuantity = parseInt(eachInnerCart.quantity) + 1
                  return { ...eachInnerCart, quantity: updatedQuantity }
                }
                return eachInnerCart
              })
              console.log(updatedCartData);
              localStorage.setItem('myProCart', JSON.stringify(updatedCartData))
              dispatch(updateCart(updatedCartData))
            }

            const onClickDecreaseBtn = () => {
              const updatedCartData = data.map(eachInnerCart => {
                if (eachInnerCart._id === pro._id) {
                  if (eachInnerCart.quantity > 1) {
                    const updatedQuantity = eachInnerCart.quantity - 1
                    return { ...eachInnerCart, quantity: updatedQuantity }
                  }
                  return eachInnerCart
                }
                return eachInnerCart
              })
              console.log(updatedCartData);
              localStorage.setItem('myProCart', JSON.stringify(updatedCartData))
              dispatch(updateCart(updatedCartData))
            }

            return (
              <Grid key={pro._id} item xs={12}>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", p: 2 }} >
                  <Box sx={{ width: "300px" }}>
                    <CardMedia
                      component="img"
                      alt={pro.name}
                      sx={{
                        width: 150,
                      }}
                      image={pro.imageURL}
                    />
                    <Typography variant="h6">{pro.name}</Typography>
                  </Box>
                  <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Button sx={{padding: 0}} onClick={onClickDecreaseBtn} variant='outlined' >
                    <RemoveCircleOutlineOutlinedIcon  />
                    </Button>
                  <Typography sx={{padding: "0px 5px"}} variant="h6">{pro.quantity}</Typography>
                  <Button sx={{padding: 0}} onClick={onClickIncreaseBtn}  variant='outlined'>
                    <AddBoxOutlinedIcon />
                  </Button>
                  </Box>
                  <CardActions>
                    <Button onClick={onClickDeleteButton} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          }
          )}

        </Grid>
        {data.length > 0 && (
          <Box sx={{ mt: "30px" }}>
            <Divider sx={{ backgroundColor: "black" }} variant="middle" />
            <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
              <Typography variant="h6">Order Total :-</Typography>
              <Box>
              <Typography variant="h6">Rs {totalValue}/-</Typography>
              <Link style={{textDecoration: "none"}} to="/payment">
              <Button variant="contained" size="medium">Checkout</Button>
              </Link>
              </Box>
            </Box>
          </Box>
        )}

        {data.length < 1 && <Typography variant="h4">No Items in the Cart</Typography>}
      </Box>
    </Container>
  )
}
