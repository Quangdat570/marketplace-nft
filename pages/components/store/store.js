import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./feautes/Products.slice";


const store = configureStore({
    reducer: {
       
        products: productsReducer,
        
        
        
    },
});

export default store;