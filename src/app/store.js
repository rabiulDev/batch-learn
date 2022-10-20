import { configureStore } from "@reduxjs/toolkit";
import classEventsReducer from "./features/classEvents";
import historyReducer from "./features/sessionHistory";
import savedCardsReducer from "./features/savedCards";
import invoiceHistoryReducer from "./features/invoicesHistory";
import addNewCardModalReducer from "./features/addNewCardModal";
import profileInfoReducer from "./features/profileInfo";
import createClassroomDataReducer from "./features/createClassRoomData";
import classRoomReducer from "../app/features/classRoom"

export const store = configureStore({
  reducer: {
    classEvents: classEventsReducer,
    classRoom: classRoomReducer,
    profileInfo: profileInfoReducer,
    createClassroomData: createClassroomDataReducer,
    sessionHistory: historyReducer,
    savedCards: savedCardsReducer,
    invoiceHistory: invoiceHistoryReducer,
    addNewCardModal: addNewCardModalReducer,
  },

  // Disable the non-serializable value checking
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
