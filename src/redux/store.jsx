import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./reducers/shoeReducer";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
    reducer: {
        shoeReducer: shoeReducer,
        loginReducer: loginReducer,
        registerReducer: registerReducer,
        userReducer: userReducer
    }
})