import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/users";

export const getUsers = createAsyncThunk("@users/getUsers", async () => {
  const data = await axios.get(API);
  return data.data;
});

export const addUser = createAsyncThunk("@users/addUser", async (newUser) => {
  await axios.post(API, newUser);
  return newUser;
});
