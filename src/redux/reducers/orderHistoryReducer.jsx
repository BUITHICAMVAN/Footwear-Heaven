import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/configure';

const initialState = {
  orderDetail: []
}

const orderHistoryReducer = createSlice({
  name: 'userOrderReducer',
  initialState,
  reducers: {
    setOrderAsyncAction: (state, action) => {
      state.orderDetail = action.payload
    }
  }
});

export const { setOrderAsyncAction } = orderHistoryReducer.actions

export default orderHistoryReducer.reducer


export const saveOrderHistoryUserProfileAsync = (orderHistory) => {
  return async (dispatch) => {
    try {
      const res = await http.post("Users/order", orderHistory);
      console.log("Order history posted successfully:", res);
      const action = setOrderAsyncAction(res.data.content)
      dispatch(action)
    } catch (error) {
      console.error('Error posting order history:', error);
    }
  }
}