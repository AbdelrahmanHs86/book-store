import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false },
    reducers: {
        toggleLogin(state, action) {
            state.loggedIn = !state.loggedIn;
        }
    }

});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;