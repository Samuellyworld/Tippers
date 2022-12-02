// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant modules + functions
import { configureStore } from "@reduxjs/toolkit";
import alertModalReducer from "./alert/alert.modal.reducer";
import resultReducer from "./result/result.reducer";

//creating store
export const store = configureStore({
    reducer: {   
     alert: alertModalReducer,
     result: resultReducer
    }
    });

// exporting types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;