import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../utils/configure';

const initialState = {
    infoUser: {}
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserProfileAsyncAction: (state, action) => {
            state.infoUser = action.payload
        }
    }
});

export const { setUserProfileAsyncAction } = userReducer.actions

export default userReducer.reducer

export const getUserProfileAsync = () => {
    return async (dispatch) => {
        try {
            // featch userList from API
            const res = await http.get("Users/getProfile")
            console.log(res)
            const action = setUserProfileAsyncAction(res.data.content)
            console.log(action)
            dispatch(action)
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }
}