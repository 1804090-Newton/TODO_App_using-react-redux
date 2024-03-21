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
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter(book => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const bookToUpdate = state.books.find(book => book.id === id);
      if (bookToUpdate) {
        bookToUpdate.title = title;
        bookToUpdate.author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
