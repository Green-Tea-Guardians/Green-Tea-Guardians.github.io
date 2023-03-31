import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchSingleGroup = createAsyncThunk(
  "singleGroup/fetchSingleGroup",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/groups/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);


const singleGroupSlice = createSlice({
  name: "singleGroup",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleGroup.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleGroup = (state) => {
  return state.singleGroup
}

export default singleGroupSlice.reducer;