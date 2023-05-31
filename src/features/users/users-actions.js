import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/users";

export const getUsers = createAsyncThunk("@users/getUsers", async () => {
  const data = await axios.get(API);
  console.log(data);
  return data;
});
