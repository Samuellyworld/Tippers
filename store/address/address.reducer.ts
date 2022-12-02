// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ADDRESS_ACTION_TYPES } from './address.types';

// user types
interface addressTypes {
   address :  any,
}

// initial state
const initialState: addressTypes= {
  address : null
}

// setting address actions
export const addressSlice= createSlice({
  name: ADDRESS_ACTION_TYPES.ADDRESS_TYPE,
  initialState,
  reducers : {
   setUserAddress : (state :any, action :PayloadAction<any>) => {
    state.address = action.payload
   },
  
  }

  
})

// dispatch
export const {setUserAddress} = addressSlice.actions

// reducer
export default addressSlice.reducer;