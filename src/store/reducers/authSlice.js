import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false, userName: 'Hamedoo' },
    reducers: {
        toggleLogin(state, action) {
            state.loggedIn = !state.loggedIn;
        }
    }

});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;