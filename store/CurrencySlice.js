import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCurrencies = createAsyncThunk(
  "Currency/all",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/currency`, {
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

const CurrencySlice = createSlice({
  name: "Currency",
  initialState: {
    initialloading: false,
    currencies: [],
    currentcurrency: null,
    error: null,
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currentcurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCurrencies.pending, (state, action) => {
      state.initialloading = true;
    });
    builder.addCase(getAllCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload.data;
      state.currentcurrency = action.payload.data[0]; // Set the first currency as default
      state.initialloading = false;
    });
    builder.addCase(getAllCurrencies.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { setCurrency } = CurrencySlice.actions;
export default CurrencySlice.reducer;
