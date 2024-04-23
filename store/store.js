
// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CourcesSlice from "./CourcesSlice";
import NewsSlice from "./NewsSlice";
import FaqSlice from "./FaqSlice";
export default configureStore({
  reducer: {
    AuthSlice,
    CourcesSlice,
    NewsSlice,
    FaqSlice,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
