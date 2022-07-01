import { createSlice } from "@reduxjs/toolkit";

// sample data
/* {
    _id: "62ab5417a33f9919a87ce14e",
    name: "Titan Smart Pro Smartwatch",
    category: "Electronic",
    price: 11999,
    descriptoon: "Stylish men's watch with pro features",
    manufacturer: "Titan",
    availableItems: 40,
    imageURL: "https://i.ibb.co/SPwqMvP/watch.jpg",
} */

let cartData = []

if (localStorage.getItem('myProCart') != undefined) {
    cartData =  JSON.parse(localStorage.getItem('myProCart'))
} 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: cartData
    },
    reducers: {
        addCartItem: (state, actions) => {
            state.data.push(actions.payload);
           /*  console.log(state.data); */
        },
        deleteCartItem: (state, actions) => {
            state.data = actions.payload
        },
        updateCart: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { addCartItem, deleteCartItem, updateCart } = cartSlice.actions;

export default cartSlice.reducer