import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
    { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი" },
    { id: 3, title: "მე, ბებია, ილიკო და ილარიონი", author: "ნოდარ დუმბაძე" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },

    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

    clearBooks(state) {
      state.books = [];
    },
  },
});

export const { addBook, removeBook, clearBooks } = booksSlice.actions;

export default booksSlice.reducer;
