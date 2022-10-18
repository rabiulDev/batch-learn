import { configureStore } from "@reduxjs/toolkit";
import classroomReducer from "./features/classroom"
import historyReducer from "./features/sessionHistory"
export const store = configureStore({
  reducer: {
    classroom: classroomReducer,
    sessionHistory: historyReducer
  },
});
