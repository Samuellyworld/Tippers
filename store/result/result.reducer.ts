// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RESULT_ACTION_TYPES } from './result.types';

// user types
interface resultTypes {
   result :  any,
}

// initial state
const initialState: resultTypes= {
  result : null
}

// setting user actions
export const resultSlice= createSlice({
  name: RESULT_ACTION_TYPES.RESULT_TYPE,
  initialState,
  reducers : {
   setResult : (state :any, action :PayloadAction<any>) => {
    state.result = action.payload 
   },
  
  }

  
})

// dispatch
export const {setResult} = resultSlice.actions

//reducer
export default resultSlice.reducer

