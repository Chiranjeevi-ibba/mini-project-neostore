import React from 'react'
import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom'
import MyAppBar from './components/MyAppBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'
import AddProduct from './components/AddProduct';
import { isLoggedIn,isAdmin } from './service/Auth';
import Payment from './components/Payment';

function PrivateRoute({children}){
  const auth=isLoggedIn();
  return auth ?children :<Navigate to="/login" />;
}
function AdminPrivateRoute({children}){
  const auth=isLoggedIn();
  const admin=isAdmin();
  return auth && admin ?children :<Navigate to="/login" />;
}


export default function App() {
  return (
    <>
      <Router>
        <MyAppBar/>
        <section>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/" element={<PrivateRoute>
                <Home/>
              </PrivateRoute>}/>
              <Route path="/products" element={<PrivateRoute>
                <Products/>
              </PrivateRoute>}/>
              <Route path="/product-details/:id" element={<PrivateRoute>
                <ProductDetails/>
              </PrivateRoute>}/>
              <Route path="/addproduct" element={<AdminPrivateRoute>
                <AddProduct />
              </AdminPrivateRoute>}/>
              <Route path="/cart" element={<PrivateRoute>
                <Cart/>
              </PrivateRoute>}/>
              <Route path="/payment" element={<PrivateRoute>
                <Payment/>
              </PrivateRoute>}/>
          </Routes>
        </section>
      </Router>
    </>
  )
}
