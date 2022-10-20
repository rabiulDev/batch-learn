import { configureStore } from "@reduxjs/toolkit";
import classEventsReducer from "./features/classEvents";
import historyReducer from "./features/sessionHistory";
import savedCardsReducer from "./features/savedCards";
import invoiceHistoryReducer from "./features/invoicesHistory";
import addNewCardModalReducer from "./features/addNewCardModal";
import profileInfoReducer from "./features/profileInfo";


export const store = configureStore({
  reducer: {
    classEvents: classEventsReducer,
    profileInfo: profileInfoReducer,
    sessionHistory: historyReducer,
    savedCards: savedCardsReducer,
    invoiceHistory: invoiceHistoryReducer,
    addNewCardModal: addNewCardModalReducer,
  },
});
