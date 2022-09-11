import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const bookSlice = createSlice({
    name: 'book',
    initialState: { bookslist: [] },
    reducers: {},

})


export default bookSlice.reducer;