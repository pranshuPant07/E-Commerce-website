import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import axios from "axios";
const intialStateCategory = {
    loading: false,
    arrCategory: [],
    error: '',
    selectedCategory: 'Select Category'
}

export var fetchCategory = createAsyncThunk('category/fetchCategory', () => {
    return axios.get('https://dummyjson.com/products/categories').then((response) => {
        return response.data ;
    })
})

const CategorySlice = createSlice({
    name: 'Category',
    initialState: intialStateCategory,
    reducers:{
        changeCategory:(state,action)=>{
            state.selectedCategory=action.payload
        }
    },
        extraReducers: (builder) => {
            builder.addCase(fetchCategory.pending, (state, action) => {
                state.loading = true;
            })
            builder.addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.arrCategory = action.payload;
            })
            builder.addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        }
    })
export default CategorySlice;   