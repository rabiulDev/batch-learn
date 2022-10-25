import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstStepData: {},
  secondStepData: {},
  thirdStepData: {},
}

// about: "",
//       classes_tools: [],
//       email:"",
//       first_name:"",
//       is_accept: null,
//       last_name: "",
//       password: "",
//       phone_number: "",
//       serve_or_attend_school: [],
//       subjects: [],
//       teacher_type:"",

export const teacherRegisterData = createSlice({
    name: 'teacher-regi-data',
    initialState,
    reducers: {
      setFirstStepData: (state, {payload}) => {
        state.firstStepData = payload
      },
      setSecondStepData: (state, {payload}) => {
        state.secondStepData = payload
      },
      setThirdStepData: (state, {payload}) => {
        state.thirdStepData = payload
      },
    },
  })

export const { setFirstStepData, setSecondStepData, setThirdStepData } = teacherRegisterData.actions

export default teacherRegisterData.reducer