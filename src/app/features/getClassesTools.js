import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
const initialState = {
  isLoading: false,
  classTools: [],
  isError: "",
};

export const loadClassTools = createAsyncThunk(
  "classTools/data",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.staging.batchlearn.com/api/v1/settings/get_classes_tools/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const classToolsSlice = createSlice({
  name: "classToolsOptions",
  initialState,
  reducers: {},

  extraReducers: {
    [loadClassTools.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadClassTools.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.classTools = action.payload;
    },

    [loadClassTools.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default classToolsSlice.reducer;