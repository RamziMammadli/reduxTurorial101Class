import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./reducers/getSlice";
import postSlice from "./reducers/postSlice";

export const store = configureStore({
    reducer:{
        getSlice: getSlice,
        postSlice: postSlice
    }
})