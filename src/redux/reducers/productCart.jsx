import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/configure";
const initialState = {
  arrProductCart: [
    {
      id: 1,
      name: "vans black",
      alias: "vans-black-black",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 1,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[2,3,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/vans-black-black.png",
    },
  ],
};

const productCartReducer = createSlice({
  name: "productCartReducer",
  initialState,
  reducers: {
    addToCart: (state,action)=>{
        const prodCart = { ...action.payload, quantity: 1 };
        const prodCheck = state.arrProductCart.find(
          (prod) => prod.id === prodCart.id
        );
        if (prodCheck) {
          prodCheck.quantity += 1;
        } else {
          state.arrProductCart.push(prodCart);
        }

        // state.arrProductCart= action.payload;
    },
    changeQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const propdCheck = state.arrProductCart.find((prod) => prod.id === id);
        if (propdCheck) {
          propdCheck.quantity += quantity;
          if (propdCheck.quantity < 1) {
            if (window.confirm("bạn có muốn xóa ? ")) {
              state.arrProductCart = state.arrProductCart.filter(
                (p) => p.id !== id
              );
            } else {
              propdCheck.quantity += 1;
            }
          }
        }
      },
      changeQuantityInput: (state, action) => {
        const { id, value } = action.payload;
        const prodChangeQuantity = state.arrProductCart.find((p) => p.id === id);
        if (prodChangeQuantity && value > 0 && value < 100) {
          prodChangeQuantity.quantity = Number(value);
        }
      },
  },
});

export const {addToCart,changeQuantityInput,changeQuantity} = productCartReducer.actions;

export default productCartReducer.reducer;
// action
