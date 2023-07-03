import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./reducers/getSlice";

export const store = configureStore({
    reducer:{
        getSlice: getSlice
    }
})