import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/configure';

const initialState = {
    userRegister: {}
}

const registerReducer = createSlice({
  name: 'registerReducer',
  initialState,
  reducers: {
    setUserRegister: (state, action) => {
        state.userRegister = action.payload
    }
  }
});

export const { setUserRegister } = registerReducer.actions

export default registerReducer.reducer

export const userRegisterAsync = (userRegister) => {
    return async (dispatch) => {
        try {
            const res = await http.post('Users/signup', userRegister)
            dispatch(setUserRegister(res.data.content)); 
            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: error.response.data.message }; 
        }
    }
}
