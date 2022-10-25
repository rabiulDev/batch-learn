import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
const initialState = {
  isLoading: false,
  school: [],
  isError: "",
};

export const loadSchools = createAsyncThunk(
  "schools/data",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.staging.batchlearn.com/api/v1/settings/get_schools/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},

  extraReducers: {
    [loadSchools.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadSchools.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.school = action.payload;
    },

    [loadSchools.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default schoolSlice.reducer;