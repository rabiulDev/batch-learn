import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createClassroomData: {},
};

export const createClassroomDataSlice = createSlice({
  name: "createClassroomData",
  initialState,
  reducers: {
    setCreateClassroomData: (state, action) => {
      state.createClassroomData = action.payload;
    },
  },
});

export const { setCreateClassroomData } = createClassroomDataSlice.actions;

export default createClassroomDataSlice.reducer;
