import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../../api/axiosAPI";

const initialState = {
  comment: [],
};

// 댓글 조회
export const __getComments = createAsyncThunk(
  "comments/get",
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await instanceAxios.get(`project/${payload}/comment`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 추가
export const __postComments = createAsyncThunk(
  "comments/post",
  async (payload, thunkAPI) => {
    try {
      await instanceAxios.post(`project/${payload.detailId}/comment`, {
        contents: payload.contents,
      });
      // console.log(data);
      // return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제
export const __delComments = createAsyncThunk(
  "comments/delete",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await instanceAxios.delete(
        `project/${payload.detailId}/comment/${payload.id}`
      );
      // return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정
export const __putComments = createAsyncThunk(
  "comments/update",
  async (payload, thunkAPI) => {
    try {
      const data = await instanceAxios.put(
        `project/${payload.detailId}/comment/${payload.id}`,
        { contents: payload.contents }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: {
    [__getComments.pending]: (_state) => {},
    [__getComments.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },
    [__getComments.rejected]: (_state, _action) => {},
    [__postComments.pending]: (_state) => {},
    [__postComments.fulfilled]: (state, action) => {
      // state.comment = [...state.comment, action.payload];
    },
    [__postComments.rejected]: (_state, _action) => {},
    [__delComments.pending]: (_state) => {},
    [__delComments.fulfilled]: (state, action) => {
      // state.comment = state.comment.filter(
      //   (com) => com.commentId !== action.payload.id
      // );
    },
    [__delComments.rejected]: (_state, _action) => {},
    [__putComments.pending]: (_state) => {},
    [__putComments.fulfilled]: (state, action) => {
      state.comment = state.comment.map((update) => {
        if (update.commentId === action.payload.id) {
          return { ...action.payload };
        } else {
          return update;
        }
      });
    },
    [__putComments.rejected]: (_state, _action) => {},
  },
});

export default commentSlice.reducer;
