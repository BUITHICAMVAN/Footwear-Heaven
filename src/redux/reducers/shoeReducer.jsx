import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/configure';

const initialState = {
    arrShoe: [],
    shoeDetail: {
    }
}

const shoeReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        setProductDetailAction: (state, action) => {
            state.productDetail = action.payload
        }
    }
});

export const { setProductAction, setProductDetailAction } = shoeReducer.actions

export default shoeReducer.reducer

// // ACTION ASYNC (ACTION THUNK)
// export const getApiActionAsync = async (dispatch) => {
//     // Xu ly logic api
//     const res = await http.get('/product')
//     // Sau khi co du lieu tu api thi dung dispatch de goi action thuong
//     const action = setProductAction(res.data.content)
//     dispatch(action);
// }

// // Can phai truyen param tu ngoai vao => CLOSURE FUNCTION
// export const getApiProductDetailActionAsync = (id) => {
//     return async (dispatch) => {
//         // Xu ly logic api
//         const res = await http.get(`/Product/getbyid?id=${id}`);
//         console.log(res)
//         const action = setProductDetailAction(res.data.content)
//         console.log(action.payload) //verify if the dispatched matched the structure of reducer
//         // phong action len tren setProductDetailAction()
//         dispatch(action)
//     }
// }

// export const getApiProductDetailActionAsync = async (dispatch) => {
//   // Xu ly logic api
//   const res = await http.get( '/product/getbyid?=1');
//   const action = setProductDetailAction(res.data.content)
//   // phong action len tren setProductDetailAction()
//   dispatch(action)
// }