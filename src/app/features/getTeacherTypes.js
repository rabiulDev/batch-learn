import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
const initialState = {
  isLoading: false,
  teacherType: [],
  isError: "",
};

export const loadTeachersTypes = createAsyncThunk(
  "teacherType/data",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.staging.batchlearn.com/api/v1/settings/get_teacher_types/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const teacherTypesSlice = createSlice({
  name: "teacherTypes",
  initialState,
  reducers: {},

  extraReducers: {
    [loadTeachersTypes.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadTeachersTypes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.teacherType = action.payload;
    },

    [loadTeachersTypes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default teacherTypesSlice.reducer;