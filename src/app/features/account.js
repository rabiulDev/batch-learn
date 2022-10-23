// https://api.staging.batchlearn.com/api/v1/auth/account/
//{"id":17,"first_name":"Rabi","last_name":"Islam","email":"rabiul.dev@gmail.com","groups":["Student"],"profile_id":11}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  account: {},
  isError: "",
};

export const loadAccountData = createAsyncThunk(
  "account/data",
  async (fetchData, { rejectWithValue }) => {
    try {
      const response = await fetchData.get("auth/account/");
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},

  extraReducers: {
    [loadAccountData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadAccountData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.account = action.payload;
    },

    [loadAccountData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default accountSlice.reducer;