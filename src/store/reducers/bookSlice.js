import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getBooks = createAsyncThunk('book/getBooks', async (arg, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetch(' http://localhost:3005/book');
        const data = await res.json();
        return data;
    } catch (e) {
        rejectWithValue(e.message)
    }

})

export const addBooks = createAsyncThunk('book/addBooks', async (bookData, thunkAPI) => {

    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userName = getState().authReducer.userName;

    try {
        const res = await fetch(' http://localhost:3005/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ ...bookData, author: userName })
        });
        const data = await res.json();
        return data;
    } catch (e) {
        rejectWithValue(e.message)
    }

})

const bookSlice = createSlice({
    name: 'book',
    initialState: { bookslist: [], loading: true, },
    reducers: {},
    extraReducers: {
        //getbooks
        [getBooks.pending]: (state, action) => {
            state.loading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload ? state.bookslist = action.payload : state.bookslist = [];
        },
        [getBooks.rejected]: (state, action) => {
            state.loading = false;
            console.log('rejected', action.payload);
        },

        //AddBooks
        [addBooks.pending]: (state, action) => {

        },
        [addBooks.fulfilled]: (state, action) => {
            state.bookslist.push(action.payload);
        },
        [addBooks.rejected]: (state, action) => {
            console.log('rejected', action.payload);
        },

    }

})


export default bookSlice.reducer;