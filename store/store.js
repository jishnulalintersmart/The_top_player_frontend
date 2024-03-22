
// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CourcesSlice from "./CourcesSlice";
export default configureStore({
  reducer: {
    AuthSlice,
    CourcesSlice
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
