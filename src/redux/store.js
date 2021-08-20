import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import dictionaryReducer from "./dictionarySlice";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer
  }
});

setupListeners(store.dispatch);
