import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  profileInfo: {},
  isError: "",
};

export const loadProfileInfoData = createAsyncThunk(
  "profileinfo/data",
  async (fetchData, { rejectWithValue }) => {
    try {
      const response = await fetchData.get(
        "auth/profile_info/"
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const profileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {},

  extraReducers: {
    [loadProfileInfoData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadProfileInfoData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profileInfo = action.payload;
    },

    [loadProfileInfoData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default profileInfoSlice.reducer;