import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allClasses: [],
  isError: "",
};

export const loadClassRoomData = createAsyncThunk(
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

export const classroomSlice = createSlice({
  name: "classroom",
  initialState,
  reducers: {},

  extraReducers: {
    [loadClassRoomData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadClassRoomData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allClasses = action.payload;
    },

    [loadClassRoomData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default classroomSlice.reducer;
