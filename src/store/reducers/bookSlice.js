import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getBooks = createAsyncThunk('book/getBooks', async (arg, thunkAPI) => {

    const { rejectWithValue, getState, dispatch } = thunkAPI;

    try {
        const res = await fetch(' http://localhost:3005/book');
        const data = await res.json();
        return data;
    } catch (e) {
        rejectWithValue(e.message)
    }

})

const bookSlice = createSlice({
    name: 'book',
    initialState: { bookslist: [] },
    reducers: {},
    extraReducers: {
        //getbooks
        [getBooks.pending]: (state, action) => {

        },
        [getBooks.fulfilled]: (state, action) => {
            state.bookslist = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            console.log('rejected', action.payload);
        },

    }

})


export default bookSlice.reducer;