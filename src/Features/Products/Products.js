import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Initial_State_API = {
    loading: false,
    data: [],
    error: ''
}

export var fetch_Product = createAsyncThunk('product/fetch_product', () => {
    return axios.get('https://dummyjson.com/products').then((response) => {
        return response.data 
    })
})

const ProductSlice = createSlice({
    name: 'Products',
    initialState: Initial_State_API,
    extraReducers: (builder) => {
        builder.addCase(fetch_Product.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetch_Product.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.products ;
        })
        builder.addCase(fetch_Product.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default ProductSlice