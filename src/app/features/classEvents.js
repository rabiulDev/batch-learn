import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allClasses: [],
  isError: "",
};

export const loadClassEventData = createAsyncThunk(
  "classroom/data",
  async (fetchData, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(
        "classrooms/?min_date=2022-09-24%2000:00&max_date=2022-11-05%2023:59&school=&subject="
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const classEventSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: {},

  extraReducers: {
    [loadClassEventData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadClassEventData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allClasses = action.payload;
    },

    [loadClassEventData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default classEventSlice.reducer;
