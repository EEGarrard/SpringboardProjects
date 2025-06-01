import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice.jsx";
import usersReducer from "../features/users/usersSlice.jsx"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
});
