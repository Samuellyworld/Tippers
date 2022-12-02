// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant modules + functions
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import alertModalReducer from "./alert/alert.modal.reducer";
import resultReducer from "./result/result.reducer";
import addressReducer from "./address/address.reducer";

// persist config
const presistConfig = {
    key: "main-root",
    storage,
  };
  
  const setAddressReducer = persistReducer(presistConfig, addressReducer)
//creating store
export const store = configureStore({
    reducer: {   
     alert: alertModalReducer,
     result: resultReducer,
     address: setAddressReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    });

const Persistor = persistStore(store);

export { Persistor };
// exporting types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;