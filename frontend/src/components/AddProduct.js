import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../service/Product';

export default function AddProduct() {
    const theme = createTheme();

    const [state, setState] = useState({})
    const navigate = useNavigate();

    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        postProduct(state)
        .then(res => {
            if(res.data){
                alert("Product Added");
                navigate("/products")
            }
        })

    };

    return (
        <Container>
            <h2>Add Product</h2>

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                    <Typography component="h1" variant="h5">
                        Add Product
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    name="category"
                                    autoComplete="category"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    required
                                    fullWidth
                                    id="price"
                                    label="Price"
                                    name="price"
                                    autoComplete="price"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="manufacturer"
                                    label="Manufacture"
                                    name="manufacturer"
                                    autoComplete="manufacturer"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="availableItems"
                                    label="AvailablreItems"
                                    name="availableItems"
                                    autoComplete="availableItems"
                                    onChange={handler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="imageURL"
                                    label="ImageURL"
                                    name="imageURL"
                                    autoComplete="imageURL"
                                    onChange={handler}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Product
                        </Button>
                    </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        </Container>

    )
}
