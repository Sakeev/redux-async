import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./features/users/users-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
