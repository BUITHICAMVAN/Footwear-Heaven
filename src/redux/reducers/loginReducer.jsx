import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/configure';

const initialState = {
    userLogin: ''
}

const loginReducer = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        setAuthenticationLogin: (state, action) => {
            state.userLogin = action.payload
        }
    }
});

export const { setAuthenticationLogin } = loginReducer.actions

export default loginReducer.reducer

export const authenticateLoginAsync = (userLogin) => {
    return async (dispatch) => {
        try {
            const res = await http.post('Users/signin', userLogin)

            // If login is successful, store token and user data in localStorage
            const token = res.data.content.accessToken;
            const userLoginResult = res.data.content;

            localStorage.setItem('user_login', JSON.stringify(userLoginResult));
            localStorage.setItem('token', token);

            dispatch(setAuthenticationLogin(userLoginResult)); 
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: error.response.data.message };
        }
    }
}