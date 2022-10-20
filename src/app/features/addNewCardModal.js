import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openModal: false,
}


export const addNewCardModalSlice = createSlice({
    name: 'addPaymentMethod',
    initialState,
    reducers: {
      openAddNewCardModal: (state) => {
        state.openModal = true
      },
      closeAddNewCardModal: (state) => {
        state.openModal = false
      },
    },
  })

export const { openAddNewCardModal, closeAddNewCardModal } = addNewCardModalSlice.actions

export default addNewCardModalSlice.reducer