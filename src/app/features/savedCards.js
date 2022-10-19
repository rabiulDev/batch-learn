import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allCards: [],
  isError: "",
};

export const loadSavedCards = createAsyncThunk(
  "saved/cards",
  async (fetchData, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(
        "billing/payment-methods/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const savedCardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},

  extraReducers: {
    [loadSavedCards.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadSavedCards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allCards = action.payload;
    },

    [loadSavedCards.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default savedCardSlice.reducer;
