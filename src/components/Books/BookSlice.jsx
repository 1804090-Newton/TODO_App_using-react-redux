import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Beautiful Life", author: "Sourav vai" },
    { id: 2, title: "redux er hate khori", author: "Newton" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state,action)=>{
      state.books.push(action.payload)
    },
    deleteBook:(state,action)=>{
      const id=action.payload;
     state.books= state.books.filter(book=>book.id!==id)
    },
  },
});

export const { showBooks, addBook , deleteBook} = bookSlice.actions;
export default bookSlice.reducer; 
