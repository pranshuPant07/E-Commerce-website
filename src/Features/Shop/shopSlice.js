import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialstateApi = {
    loading: false,
    data: [],
    error: ''
}
export var fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios.get('https://dummyjson.com/products').then((response) => {
        return response.data;
    })
})

const shopProductSlice = createSlice({
    name: 'Product',
    initialState: initialstateApi,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }

})
export default shopProductSlice
