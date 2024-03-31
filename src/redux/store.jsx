import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./reducers/shoeReducer";
import loginReducer from "./reducers/loginReducer";

export const store = configureStore({
    reducer: {
        shoeReducer: shoeReducer,
        loginReducer: loginReducer
    }
})