import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./reducers/shoeReducer";

export const store = configureStore({
    reducer: {
        shoeReducer: shoeReducer,
    }
})