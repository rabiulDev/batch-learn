import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
const initialState = {
  isLoading: false,
  subjects: [],
  isError: "",
};

export const loadSubjects = createAsyncThunk(
  "subject/data",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.staging.batchlearn.com/api/v1/settings/get_subjects/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},

  extraReducers: {
    [loadSubjects.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadSubjects.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subjects = action.payload;
    },

    [loadSubjects.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default subjectSlice.reducer;