import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allHistory: {},
  isError: "",
};

export const loadHistoryData = createAsyncThunk(
  "history/data",
  async ({fetchData, URL}, { rejectWithValue }) => {
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

export const sessionHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},

  extraReducers: {
    [loadHistoryData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadHistoryData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allHistory = action.payload;
    },

    [loadHistoryData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default sessionHistorySlice.reducer;
