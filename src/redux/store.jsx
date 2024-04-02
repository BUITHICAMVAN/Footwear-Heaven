import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./reducers/shoeReducer";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import productReducer from "./reducers/productReducer";
import productCartReducer from "./reducers/productCart";

export const store = configureStore({
  reducer: {
    shoeReducer: shoeReducer,
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    productReducer: productReducer,
    productCartReducer: productCartReducer,
  },
});
