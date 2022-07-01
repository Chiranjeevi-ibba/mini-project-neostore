import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../style/style.css'


/* navbar */
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



        








const Payment = () => {
    return (
        <Box className="payment-container">
            <img src="https://i.ibb.co/xL1qPdj/Vector.png" alt="payment sucessfull" />
            <h1 className="payment-text">Payment Successful</h1>
            <h3 className="payment-para-text">
                Thank you for ordering Your payment is successfully completed.
            </h3>
            <Link style={{textDecoration: "none", padding: "16px"}} to="/">
                <Button variant="contained">
                    Go to Home Page
                </Button>
            </Link>
        </Box>
    )
}

export default Payment