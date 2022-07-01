import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductByid } from '../service/Product';
/* import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; */
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { addCartItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [proData, setProData] = useState([])
    useEffect(() => {
        getProductByid(id)
        .then(res => {
           /*  console.log(res.data); */
            setProData(res.data)
          })
    }, [])

    const addToCart = () => {
      if (localStorage.getItem('myProCart') != undefined) {
        /* console.log(each.id) */
        let arr = JSON.parse(localStorage.getItem('myProCart'))
        console.log(arr);
        const checker = arr.filter(eachObj => eachObj._id === proData._id)
        if (checker.length !== 0) {
          alert('Item alredy added into the cart')
        } else {
          localStorage.setItem('myProCart', JSON.stringify([...arr, proData]))
          dispatch(addCartItem({ ...proData }))
          alert("Item is Added to the cart")
        }
      } else {
        localStorage.setItem('myProCart', JSON.stringify([proData]))
        dispatch(addCartItem({ ...proData }))
        alert("Item is Added to the cart")
      }
    }

    
  return (
    <Container>
        <h1>ProductDetails</h1>
        <Card sx={{ maxWidth: 345, margin:"30px auto" }}>
                <CardMedia
                  component="img"
                  alt={proData.name}
                  min-height={350}
                  image={proData.imageURL}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {proData.name}
                  </Typography>
                  <Typography variant="body2" color="text.dark">
                    Category : {proData.category}
                  </Typography>
                  <Typography variant="body2" color="text.dark">
                    Price : {proData.price}
                  </Typography>
                  <Typography variant="body2" color="text.dark">
                    Avail Items : {proData.availableItems}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={addToCart} size="small">Add To Cart</Button>
                </CardActions>
              </Card>
    </Container>
  )
}
