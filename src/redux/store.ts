import { configureStore } from "@reduxjs/toolkit";
import localStoreSlice from "./slices/localStoreSlice";

export const reducers = {
  store: localStoreSlice,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
