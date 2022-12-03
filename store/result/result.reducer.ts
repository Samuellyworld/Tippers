// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RESULT_ACTION_TYPES } from './result.types';

// user types
interface resultTypes {
   result :  any,
   hash: string
}

// initial state
const initialState: resultTypes= {
  result : null,
  hash: ""
}

// setting user actions
export const resultSlice= createSlice({
  name: RESULT_ACTION_TYPES.RESULT_TYPE,
  initialState,
  reducers : {
   setResult : (state :any, action :PayloadAction<any>) => {
    state.result = action.payload 
   },
   hash : (state :any, action :PayloadAction<any>) => {
    state.hash = action.payload 
   }
  }

  
})

// dispatch
export const {setResult, hash} = resultSlice.actions

//reducer
export default resultSlice.reducer

