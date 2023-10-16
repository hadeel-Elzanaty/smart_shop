import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProds = createAsyncThunk("prods/fetchProds",
    async () => {
     //   const response = await axios.get("https://fakestoreapi.com/products")
     
        const response = await axios.get("http://mariamtarek61-001-site1.itempurl.com/Product/GetAllProduct?page=1")
        return response.data
    })
export const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: null
    },
    reducers: {},
    extraReducers: {
        [fetchProds.fulfilled]: (state, actions) => {
            state.data = actions.payload;
            state.status = "success"
        },
        [fetchProds.pending]: (state) => {
            state.status = "loading"
        },
        [fetchProds.rejected]: (state) => {
            state.status = "failed"
        }
    }
})
export default productSlice.reducer