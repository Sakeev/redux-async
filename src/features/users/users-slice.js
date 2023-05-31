import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  editUser,
  getOneUser,
  getUsers,
} from "./users-actions";

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
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((item) => item.id !== action.payload);
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        // const editedUser = action.payload;
        // const index = state.users.findIndex(
        //   (user) => user.id === editedUser.id
        // );
        // state.users[index] = editedUser;
        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        });
      });
  },
});

export const usersReducer = usersSlice.reducer;
