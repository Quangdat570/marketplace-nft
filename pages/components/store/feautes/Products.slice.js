import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
    
};

export const loadProducts = createAsyncThunk("products", async(args,api) => {
    const res = await fetch(
        "https://localhost:3002/products");
    const data = await res.json();

    return data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProducts.fulfilled, (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
                
            };
        });

    },
});

export const  productsReducer = productsSlice.reducer;

export const selectsProducts = (state) => state.products;

