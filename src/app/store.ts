import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../features/display/display";
export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
