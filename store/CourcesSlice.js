import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


export const getPayments = createAsyncThunk(
  "Cources/getPayments",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/payments`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": Cookies.get("UT"),
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCources = createAsyncThunk(
  "Cources/getCources",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/course/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": Cookies.get("UT"),
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getSubCources = createAsyncThunk(
  "Cources/getSubCources",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(
          `${process.env.customKey}/subcourse/${data.courseId}/${data.sucourseId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-Access-Token": Cookies.get("UT"),
            },
          }
        )
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getsubscribedCourse = createAsyncThunk(
  "Cources/getsubscribedCourse",
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/subscribedCourse`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": token? token: Cookies.get("UT"),
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const checkToken = createAsyncThunk(
  "Cources/checkToken",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(`${process.env.customKey}/subscribedCourse`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": data,
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const videos_in_days = createAsyncThunk(
  "Cources/videos_in_days",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(
          `${process.env.customKey}/videos/${data.courseId}/${data.subCourseId}/${data.day}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "X-Access-Token": Cookies.get("UT"),
              // params: data,
            },
          }
        )
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getVideo = createAsyncThunk(
  "Cources/getVideo",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .get(
          `${process.env.customKey}/video/${data.videoId}/${
            data.courseId
          }/${Cookies.get("UT")}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
              "X-Access-Token": Cookies.get("UT"),
              // params: data,
            },
          }
        )
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const watchedVideo = createAsyncThunk(
  "Cources/watchedVideo",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await axios
        .post(`${process.env.customKey}/video`, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Access-Token": Cookies.get("UT"),
            // params: data,
          },
        })
        .then((res) => res.data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const CourcesSlice = createSlice({
  name: "Cources",
  initialState: {
    isCourcesLoading: false,
    CoursecArr: null,
    SubCourse: null,
    subscribedCourseArr: null,
    videos: null,
    Curreent_video: null,
  },
  reducers: {
    ClearToken: (state, action) => {
      state.subscribedCourseArr = null;
      state.CoursecArr = null;
      state.videos = null;
      state.Curreent_video = null;
      state.SubCourse = null;
    },
  },
  extraReducers: {
    [getCources.pending]: (state, action) => {
      state.isCourcesLoading = true;
      state.CoursecArr = null;
    },
    [getCources.fulfilled]: (state, action) => {
      state.isCourcesLoading = false;
      state.CoursecArr = action.payload;
    },
    [getCources.rejected]: (state, action) => {
      state.isCourcesLoading = false;
      state.CoursecArr = null;
    },
    // getSubCources
    [getSubCources.pending]: (state, action) => {
      state.isCourcesLoading = true;
      state.SubCourse = null;
    },
    [getSubCources.fulfilled]: (state, action) => {
      state.isCourcesLoading = false;
      state.SubCourse = action.payload;
    },
    [getSubCources.rejected]: (state, action) => {
      state.isCourcesLoading = false;
      state.SubCourse = null;
    },
    [getsubscribedCourse.pending]: (state, action) => {
      state.isCourcesLoading = true;
    },
    [getsubscribedCourse.fulfilled]: (state, action) => {
      state.isCourcesLoading = false;
      state.subscribedCourseArr = action.payload;
    },
    [getsubscribedCourse.rejected]: (state, action) => {},
    // videos_in_days

    [videos_in_days.pending]: (state, action) => {
      state.allVideoLoading = true;
      state.videos = null;
    },
    [videos_in_days.fulfilled]: (state, action) => {
      state.allVideoLoading = false;
      state.videos = action.payload;
    },
    [videos_in_days.rejected]: (state, action) => {
      state.videos = null;
      state.allVideoLoading = false;
    },

    // getVideo
    [getVideo.pending]: (state, action) => {
      state.isCourcesLoading = true;
      state.Curreent_video = null;
    },
    [getVideo.fulfilled]: (state, action) => {
      state.isCourcesLoading = false;
      state.Curreent_video = action.payload;
    },
    [getVideo.rejected]: (state, action) => {
      state.Curreent_video = null;
    },
  },
});
export const { ClearToken } = CourcesSlice.actions;

export default CourcesSlice.reducer;
