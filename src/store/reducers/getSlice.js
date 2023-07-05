import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk('api/categories', async () => {
    const response = await axios.get('https://northwind.vercel.app/api/categories/')
    return response.data
})

const getSlice = createSlice({
    name: 'getSlice',
    initialState: {},
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        //GET
        .addCase(getCategoriesThunk.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        .addCase(getCategoriesThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getCategoriesThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }

})

export default getSlice.reducer



