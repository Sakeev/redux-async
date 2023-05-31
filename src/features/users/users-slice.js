import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers } from "./users-actions";

const initialState = {
  users: [],
  oneUser: null,
};

const usersSlice = createSlice({
  name: "@users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export const usersReducer = usersSlice.reducer;
