import { configureStore } from "@reduxjs/toolkit";
import  productReducer from "./productSlice";
import  cartReducer from "./cartSLice"
import allCategoriesReducer from "./allCategories"
import counterReducer from "./counterSlice"
const store = configureStore({
    reducer: {
        products: productReducer,
        cart :cartReducer,
        categories:allCategoriesReducer,
        counter: counterReducer

    }
})
export default store;