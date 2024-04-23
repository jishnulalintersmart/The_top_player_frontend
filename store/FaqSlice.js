import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFaq = createAsyncThunk(
  "Faq/allFaqs",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/faq`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const FaqSlice = createSlice({
  name: "Faq",
  initialState: {
    initialloading: false,
    faqs: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFaq.pending, (state, action) => {
      state.initialloading = true;
    });
    builder.addCase(getAllFaq.fulfilled, (state, action) => {
      state.faqs = action.payload;
      state.initialloading = false;
    });
    builder.addCase(getAllFaq.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default FaqSlice.reducer;
