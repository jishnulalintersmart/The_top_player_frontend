import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const getAllTestimonials = createAsyncThunk(
  "Testimonial/alltestimonials",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const result = await axios
        .get(`${process.env.customKey}/dashboard/testimonial`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": Cookies.get("UT"),
          },
        })
        .then((res) => res.data);
      console.log(result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const TestimonialSlice = createSlice({
  name: "Testimonial",
  initialState: {
    initialloading: false,
    testimonials: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTestimonials.pending, (state, action) => {
      state.initialloading = true;
    });
    builder.addCase(getAllTestimonials.fulfilled, (state, action) => {
      state.testimonials = action.payload;
      state.initialloading = false;
    });
    builder.addCase(getAllTestimonials.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default TestimonialSlice.reducer;
