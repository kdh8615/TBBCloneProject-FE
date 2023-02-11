import { configureStore } from "@reduxjs/toolkit";

import plan from "../modules/planSlice";
import contents from "../modules/contentsSlice";
import comments from "../modules/commentSlice";
import sign from "../modules/loginSlice";
import details from "../modules/detailSlice";

const store = configureStore({
  reducer: { contents, sign, plan, details, comments },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
