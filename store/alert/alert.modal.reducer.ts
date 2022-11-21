// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALERT_ACTION_TYPES } from './alert.modal.types';

// user types
interface alertTypes {
   alertModal :  { openModal: boolean, modalContent: string },
}

// initial state
const initialState: alertTypes= {
  alertModal : {openModal : false, modalContent: ""}
}

// setting user actions
export const alertSlice= createSlice({
  name: ALERT_ACTION_TYPES.ALERT_TYPE,
  initialState,
  reducers : {
   alert : (state :any, action :PayloadAction<string>) => {
    state.alertModal.openModal = true
    state.alertModal.modalContent= action.payload 
   },
  close : (state :any, action :PayloadAction<string>)  => {
    state.alertModal.openModal = false
  }
  }

  
})

// dispatch
export const {alert, close} = alertSlice.actions

//reducer
export default alertSlice.reducer

