import { configureStore } from "@reduxjs/toolkit";
import classEventsReducer from "./features/classEvents";
import historyReducer from "./features/sessionHistory";
import savedCardsReducer from "./features/savedCards";
import invoiceHistoryReducer from "./features/invoicesHistory";

export const store = configureStore({
  reducer: {
    classEvents: classEventsReducer,
    sessionHistory: historyReducer,
    savedCards: savedCardsReducer,
    invoiceHistory: invoiceHistoryReducer,
  },
});
