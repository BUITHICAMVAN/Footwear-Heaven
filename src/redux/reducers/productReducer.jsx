import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/configure";

const initialState = {
  arrProduct: [
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
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductActionDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
export const { setProductAction, setProductActionDetail } =
  productReducer.actions;
export default productReducer.reducer;

//-------------------------- action async (action thunk)-------------------
export const getApiActionAsync = async (dispatch) => {
  //Xử lý logic api
  const res = await http.get("/product");
  //Sau khi có dữ liệu từ api thì dùng dispatch để gọi action thường
  const action = setProductAction(res.data.content);
  dispatch(action);
};
// -------------details------------------
export const getApiActionProductDetailAsync = (id) => {
  return async (dispatch) => {
    const res = await http.get(`/Product/getbyid?id=${id}`);
    const action = setProductActionDetail(res.data.content);
    dispatch(action);
  };
};
// export const getApiActionProductSearchingAsync = (keyword) => {
//   return async (dispatch) => {
//     const res = await http.get(`/Product?keyword=${keyword}`);
//     // const res = await http.get(`${keyword}`);
//     const action = setProductActionDetail(res.data.content);
//     dispatch(action);
//   };
// };
