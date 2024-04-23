import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const getAllNews = createAsyncThunk(
  "News/allNews",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/news`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const NewsSlice = createSlice({
  name: "News",
  initialState: {
    allNews: [],
    initialLoadng: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNews.pending, (state, action) => {
      console.log("Pending");
      state.initialLoadng = true;
    });
    builder.addCase(getAllNews.fulfilled, (state, action) => {
      console.log("Fulfilled");
      state.allNews = action.payload;
      state.initialLoadng = false;
    });
    builder.addCase(getAllNews.rejected, (state, action) => {
      console.log("Rejected");
      console.log(action.payload);
    });
  },
});

export default NewsSlice.reducer;
