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

export const {setUserRegister} = registerReducer.actions

export default registerReducer.reducer

export const userRegisterAsync = (userRegister) => {
    return async (dispatch) => {
        try {
            const res = await http.post('Users/signup', userRegister)

            // If login is successful, store token and user data in localStorage
            const token = res.data.content.accessToken;
            const userRegisterResult = res.data.content;

            localStorage.setItem('user_login', JSON.stringify(userRegisterResult));
            localStorage.setItem('token', token);

            dispatch(setUserRegister(userRegisterResult)); 
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: error.response.data.message }; 
        }
    }
}