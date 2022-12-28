import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/axiosAPI";

const initialState = {
  detail: [],
};

export const __getDetail = createAsyncThunk(
  "detail/get",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`project/${payload}/details`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: {
    [__getDetail.pending]: (state) => {},
    [__getDetail.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {},
  },
});

export default detailSlice.reducer;
