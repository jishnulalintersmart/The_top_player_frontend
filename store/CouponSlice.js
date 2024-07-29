import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const applyCoupon = createAsyncThunk(
  "Coupon/apply_coupon",
  async (data, thunkAPI) => {
    const { coupon_code, courseAmount } = data;
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        `${process.env.customKey}/apply_coupon`,
        { coupon_code, courseAmount },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(
        err?.response?.data ? err?.response?.data?.error : "Server Error"
      );
    }
  }
);

const CouponSlice = createSlice({
  name: "Coupon",
  initialState: {
    coupon: null,
    count: 0,
    initialLoading: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyCoupon.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.coupon = action.payload;
        state.loading = false;
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CouponSlice.reducer;
