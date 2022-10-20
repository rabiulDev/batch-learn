import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  classroom: {},
  isError: "",
};

export const loadClassroomData = createAsyncThunk(
  "classroom/data",
  async ({ fetchData, URL }, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(URL);
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
    [loadClassroomData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadClassroomData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.classroom = action.payload;
    },

    [loadClassroomData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default classEventSlice.reducer;
