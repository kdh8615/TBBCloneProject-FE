import { configureStore } from "@reduxjs/toolkit"

import contents from "../modules/contentsSlice"
import plan from "../modules/planSlice"

const store = configureStore({
  reducer: { contents: contents , plan : plan},
  devTools: process.env.NODE_ENV !== "production",
})

export default store
