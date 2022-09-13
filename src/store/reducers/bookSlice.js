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

    const { rejectWithValue, getState } = thunkAPI;
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

export const deleteBook = createAsyncThunk('book/deleteBook', async (book, thunkAPI) => {

    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        await fetch(`http://localhost:3005/book/${book.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        });
        return book;
    } catch (e) {
        return rejectWithValue(e.message)
    }

})

const bookSlice = createSlice({
    name: 'book',
    initialState: { bookslist: [], loading: true, selectedBook: {}, error: '' },
    reducers: {
        selectBook(state, action) {
            state.selectedBook = action.payload;
        }
    },
    extraReducers: {
        //getbooks
        [getBooks.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload ? state.bookslist = action.payload : state.bookslist = [];
        },
        [getBooks.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload)
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

        //DeleteBook
        [deleteBook.pending]: (state, action) => {

        },
        [deleteBook.fulfilled]: (state, action) => {
            state.bookslist = state.bookslist.filter(book => book.id !== action.payload.id);
            if (state.selectedBook.id === action.payload.id) {
                state.selectedBook = {};
            }
        },
        [deleteBook.rejected]: (state, action) => {
            console.log('rejected', action.payload);
        },

    }

})

export const { selectBook } = bookSlice.actions;
export default bookSlice.reducer;