import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/users";

export const getUsers = createAsyncThunk("@users/getUsers", async () => {
  const data = await axios.get(API);
  return data.data;
});

export const addUser = createAsyncThunk(
  "@users/addUser",
  async (newUser, { dispatch }) => {
    await axios.post(API, newUser);
    dispatch(getUsers());
    return newUser;
  }
);

export const deleteUser = createAsyncThunk("@users/deleteUser", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

export const getOneUser = createAsyncThunk("@users/getOneUser", async (id) => {
  const data = await axios.get(`${API}/${id}`);
  return data.data;
});

export const editUser = createAsyncThunk(
  "@users/editUser",
  async (editedUser, { dispatch }) => {
    await axios.patch(`${API}/${editedUser.id}`, editedUser);
    dispatch(getUsers());
    return editedUser;
  }
);
