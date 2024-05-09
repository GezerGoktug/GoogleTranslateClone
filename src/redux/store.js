import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./slices/languageSlice";
import { translateSlice } from "./slices/translateSlice";

//! Slice ları tutan store
export const store = configureStore({
  reducer: {
    languageSlice: languageSlice.reducer,
    translateSlice: translateSlice.reducer,
  },
});
