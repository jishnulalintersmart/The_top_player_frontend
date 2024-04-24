// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CourcesSlice from "./CourcesSlice";
import FaqSlice from "./FaqSlice";
import NewsSlice from "./NewsSlice";
import BannerSlice from "./BannerSlice";
export default configureStore({
  reducer: {
    AuthSlice,
    CourcesSlice,
    FaqSlice,
    NewsSlice,
    BannerSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
