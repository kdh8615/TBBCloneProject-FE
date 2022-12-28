import { configureStore } from "@reduxjs/toolkit";

import contents from "../modules/contentsSlice";
import comments from "../modules/commentSlice";
import sign from "../modules/loginSlice";
import details from "../modules/detailSlice";

const store = configureStore({
  reducer: { contents, comments, sign, details },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
