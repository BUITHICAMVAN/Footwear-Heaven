import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import productCartReducer from "./reducers/productCart";
import productSearching from "./reducers/searchingReducer";
import orderHistoryReducer from "./reducers/orderHistoryReducer";

export const store = configureStore({
    reducer: {
        loginReducer: loginReducer,
        registerReducer: registerReducer,
        userReducer: userReducer,
        productReducer: productReducer,
        productCartReducer: productCartReducer,
        productSearching: productSearching,
        orderHistoryReducer: orderHistoryReducer
      },
});
    