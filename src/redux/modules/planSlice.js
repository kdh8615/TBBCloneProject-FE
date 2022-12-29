import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { instanceAxios } from "../../api/axiosAPI"

const initialState = {
    plan : {
    title: "",
    category :"",
    summary: "",
    goalPrice: 0,
    startDate: "",
    endDate: "",
    thumbnailImageUrl :"",
    contentImageListPk: [],
    content : "",
  },
  isPlan : {
    isTitle: false,
    isCategory :false,
    isSummary: false,
    isGoalPrice:false,
    isStartDate: false,
    isEndDate: false,
    isContent : false,
  }
}

export const __addPlan = createAsyncThunk(
  "plan/post",
  async (payload, thunkAPI) => {
    try {
      console.log(payload)
      const data = await instanceAxios.post('project',payload)
      console.log(data)
      return thunkAPI.fulfillWithValue("")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      const value = action.payload;
      state.plan = {...state.plan, ...value}
    },
    setImg: (state, action) =>{
      const value = action.payload;
      console.log(value)
      state.plan.contentImageListPk = [...state.plan.contentImageListPk, value]
    },
    setIsPlan:(state,action) => {
      const value = action.payload
      state.isPlan = {...state.isPlan, ...value}
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(__getcontents.pending, (state) => {
  //       state.isLoading = true
  //     })
  //     .addCase(__getcontents.fulfilled, (state, action) => {
  //       state.isLoading = false
  //       state.contents = action.payload
  //     })
  //     .addCase(__getcontents.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // },
})

export const { setPlan , setImg , setIsPlan} = planSlice.actions
export default planSlice.reducer
