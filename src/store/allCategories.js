import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllCategories = createAsyncThunk("categories/fetchCategories",
    async () => {
     //   const response = await axios.get("https://fakestoreapi.com/products")
        const response = await axios.get("http://mariamtarek61-001-site1.itempurl.com/Category/AllCategory",
       {  headers:{
            
          }})
        return response
        
    })
export const allCategoriesSlice = createSlice({
    name: "categories",
    initialState: {
        data: [],
        status: null
    },
    reducers: {},
    extraReducers: {
        [fetchAllCategories.fulfilled]: (state, actions) => {
            state.data = actions.payload;
            state.status = "success"
        },
        [fetchAllCategories.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAllCategories.rejected]: (state) => {
            state.status = "failed"
        }
    }
})
export default allCategoriesSlice.reducer