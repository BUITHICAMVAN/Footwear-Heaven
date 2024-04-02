import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/configure";

const initialState = {
  arrProductSearching: [],
};

const productSearching = createSlice({
  name: "productSearching",
  initialState,
  reducers: {
    setProductActionSearching: (state, action) => {
      state.arrProductSearching = action.payload;
    },
  },
});
export const { setProductActionSearching } = productSearching.actions;
export default productSearching.reducer;

export const getApiActionProductSearchingAsync = (keyword) => {
  return async (dispatch) => {
    const res = await http.get(`/Product?keyword=${keyword}`);
    const action = setProductActionSearching(res.data.content);
    dispatch(action);
  };
};
