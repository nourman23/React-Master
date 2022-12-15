import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./Reducers/UserReducer";

export const store = configureStore({
  reducer: {
    books: BookReducer,
  },
});
