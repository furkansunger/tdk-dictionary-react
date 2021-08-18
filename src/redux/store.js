import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dictionaryApi } from "./dictionary";

export const store = configureStore({
  reducer: {
    [dictionaryApi.reducerPath]: dictionaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware),
});

setupListeners(store.dispatch);
