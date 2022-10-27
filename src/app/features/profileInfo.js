import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  profileInfo: {},
  filteredSubject:[],
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
  reducers: {
    setFilteredSubject: (state, {payload})=>{
      state.filteredSubject = payload
    }
  },

  extraReducers: {
    [loadProfileInfoData.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadProfileInfoData.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.profileInfo = payload;
      state.filteredSubject = payload?.subjects?.map((item) => item.id)
    },

    [loadProfileInfoData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {setFilteredSubject} = profileInfoSlice.actions
export default profileInfoSlice.reducer;