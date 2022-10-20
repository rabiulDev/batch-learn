import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  classroom: [],
  isError: "",
};

export const loadClassroomData = createAsyncThunk(
  "classEvent/data",
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
  name: "classEvent",
  initialState,
  reducers: {},

  extraReducers: {
    [loadClassroomData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadClassroomData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allClasses = action.payload;
    },

    [loadClassroomData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default classEventSlice.reducer;