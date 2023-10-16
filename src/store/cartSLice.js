import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchcartprods = createAsyncThunk("cartprods/fetchcartProds",
    async () => {
     //   const response = await axios.get("https://fakestoreapi.com/products")
        const response = await axios.get("http://localhost:3030/cart")
        return response.data
    })
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
     cartItems:[],
     carttotalAmount:0,
     cartTotalQuantity:0
    },
    reducers: {
        decrease:(state,{payload})=>{
            const itemIndex = state.data.findIndex(
                (cartItem)=>cartItem.id === payload.id
            )
            if(state.data[itemIndex].numpeices > 1){
                state.data[itemIndex].numpeices -= 1
             
            }
            else if(state.data(itemIndex).numpeices ===1){
                const remoItem = state.data.filter(
                    (cartItem)=>cartItem.id !== payload.id
                )
            }
         },
         increase:(state,{payload})=>{
            const itemIndex = state.cartItems.findIndex(
                (cartItem)=>cartItem.id === payload.id
            )
            if(state.cartItems[itemIndex].numpeices  >= 0){
                state.cartItems[itemIndex].numpeices += 1
             
            }else{
                const itemproduct = {...payload , numpeices :1}
                state.data.push(itemproduct)
            }
         },
         addToCart:(state,{payload})=>{
            const itemIndex = state.cartItems.findIndex(
                (cartItem)=>cartItem.id === payload.id);
                if(itemIndex>=0){
                    state.cartItems[itemIndex].cartQuantity+=1
                }else{
                    const tempProduct = {...payload,cartQuantity:1};
                    state.cartItems.push(tempProduct)
                }
         },
         removecartItem:(state,{payload})=>{
            const itemIndex = state.cartItems.findIndex(
                (cartItem)=>cartItem.id === payload.id)
                state.data.filter((cartItem)=>cartItem.id !== payload.id)
         }
    },
    extraReducers: {
 
    }
})
export const {increase,decrease,removecartItem,addToCart} = cartSlice.actions;
export default cartSlice.reducer