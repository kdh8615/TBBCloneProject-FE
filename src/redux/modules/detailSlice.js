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

export const __postMoney = createAsyncThunk(
  "detail/postMoney",
  async (payload, thunkAPI) => {
    try {
      await instanceAxios.post(`/project/supporting/${payload.id}`, {
        supportAmount: payload.money,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __detailDelete = createAsyncThunk(
  "detail/delete",
  async (payload, thunkAPI) => {
    try {
      await instanceAxios.delete(`/project/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
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
    [__postMoney.pending]: (state) => {},
    [__postMoney.fulfilled]: (state, action) => {
      state.detail.totalSupport =
        state.detail.totalSupport + action.payload.money;
    },
    [__detailDelete.pending]: (state) => {},
    [__detailDelete.fulfilled]: (state, action) => {
      // state.detail = state.detail.filter((del) => del.id !== action.payload);
    },
    [__detailDelete.rejected]: (state, action) => {},
  },
});

export default detailSlice.reducer;
