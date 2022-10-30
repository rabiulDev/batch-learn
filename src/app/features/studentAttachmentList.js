import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  studentAttachment: {},
  studentAttachmentList: [],
  isError: "",
};

export const loadStudentAttachmentList = createAsyncThunk(
  "stuent-attachment/data",
  async ({fetchData, URL},{ rejectWithValue }) => {
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

export const studentAttachListSlice = createSlice({
  name: "studentAttachList",
  initialState,
  reducers: {
    addNewAttach: (state, action) => {
      state.attachmentList.push(action.payload);
    },
  },

  extraReducers: {
    [loadStudentAttachmentList.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadStudentAttachmentList.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.studentAttachment = payload;
      state.studentAttachmentList = payload.results
    },

    [loadStudentAttachmentList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {addNewAttach} = studentAttachListSlice.actions
export default studentAttachListSlice.reducer;