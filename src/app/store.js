import { configureStore } from "@reduxjs/toolkit";
import classEventsReducer from "./features/classEvents";
import historyReducer from "./features/sessionHistory";
import savedCardsReducer from "./features/savedCards";
import invoiceHistoryReducer from "./features/invoicesHistory";
import addNewCardModalReducer from "./features/addNewCardModal";
import profileInfoReducer from "./features/profileInfo";
import createClassroomDataReducer from "./features/createClassRoomData";
import classRoomReducer from "../app/features/classRoom"
import accoutReducer from "../app/features/account"
import commentsReducer from "../app/features/comments"
import schoolsReducer from "../app/features/getSchools"
import teacherTypesReducer from "../app/features/getTeacherTypes"
import subjectsReducer from "../app/features/getSubjects"
import classToolsReducer from "../app/features/getClassesTools"
import teacherRegistrationDataReducer from "../app/features/teacherRegisterData"
import teacherAttachListReducer from "../app/features/teacherAttachmentList"
import studentAttachListReducer from "../app/features/studentAttachmentList"


export const store = configureStore({
  reducer: {
    accout: accoutReducer,
    classEvents: classEventsReducer,
    classRoom: classRoomReducer,
    classTools: classToolsReducer,
    profileInfo: profileInfoReducer,
    createClassroomData: createClassroomDataReducer,
    comments: commentsReducer,
    sessionHistory: historyReducer,
    savedCards: savedCardsReducer,
    schools: schoolsReducer,
    subjects: subjectsReducer,
    invoiceHistory: invoiceHistoryReducer,
    addNewCardModal: addNewCardModalReducer,
    teacherTypes: teacherTypesReducer,
    teacherRegistrationData: teacherRegistrationDataReducer,
    teacherAttachList: teacherAttachListReducer,
    studentAttachList: studentAttachListReducer
  },

  // Disable the non-serializable value checking
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
