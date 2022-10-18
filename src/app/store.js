import { configureStore } from "@reduxjs/toolkit";
import classroomReducer from "./features/classroom"

export const store = configureStore({
  reducer: {
    classroom: classroomReducer
  },
});
