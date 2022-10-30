//https://api.staging.batchlearn.com/api/v1/classrooms/69/teacher-attachment-create/
//https://api.staging.batchlearn.com/api/v1/classrooms/69/teacher-attachment-list/?page=1&page_size=10

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  teacherAttachment: {},
  attachmentList: [],
  isError: "",
};

export const loadTeacherAttachmentList = createAsyncThunk(
  "teacher-attachment/data",
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

export const teacherAttachListSlice = createSlice({
  name: "teacherAttachList",
  initialState,
  reducers: {
    addNewAttach: (state, action) => {
      state.attachmentList.push(action.payload);
    },
  },

  extraReducers: {
    [loadTeacherAttachmentList.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loadTeacherAttachmentList.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.teacherAttachment = payload;
      state.attachmentList = payload.results
    },

    [loadTeacherAttachmentList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {addNewAttach} = teacherAttachListSlice.actions
export default teacherAttachListSlice.reducer;