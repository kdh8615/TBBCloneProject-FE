import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { instanceAxios } from "../../api/axiosAPI"

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}

// export const __getcontents = createAsyncThunk(
//   "contents/get",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await instanceAxios.get(`/api/contents`)
//       return thunkAPI.fulfillWithValue(data.data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

export const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    // addContent: (state, action) => {
    //   axios.post(`${DB}/contents`, action.payload)
    // },
  },
  extraReducers:{
    // builder
    //   .addCase(__getcontents.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(__getcontents.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.contents = action.payload
    //   })
    //   .addCase(__getcontents.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.error = action.payload
    //   })

  },
})

export const { } = contentsSlice.actions
export default contentsSlice.reducer
