import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/axiosAPI";

const initialState = {
  sign: [],
};

export const __signUp = createAsyncThunk(
  "signUp/post",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instanceAxios.post("member/signup", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signSlice = createSlice({
  name: "signX",
  initialState,
  extraReducers: {
    [__signUp.pending]: (state) => {},
    [__signUp.fulfilled]: (state, action) => {
      state.sign = action.payload;
    },
    [__signUp.rejected]: (state, action) => {},
  },
});

export default signSlice.reducer;
