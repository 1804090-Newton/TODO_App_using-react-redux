import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../components/Books/BookSlice";


const store=configureStore({
    reducer:{
        booksReducer: BookSlice,

    },
});

export default store;