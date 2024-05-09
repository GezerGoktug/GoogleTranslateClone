import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions/getLanguages";

const initialState = {
  isLoading: false,
  error: false,
  languages: [],
};

export const languageSlice = createSlice({
  name: "languages",
  initialState,
  extraReducers: (builder) => {
    //! HTTP isteği başarı ile sonuçlanırsa gelen dil verileri
    //! ile state i güncelle ve yüklenme durumunu bitir
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
      state.isLoading = false;
    });
    //! HTTP isteği atıldıktan sonra istek sonuçlanana kadar yüklenme durumunu sürdür.
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    //! HTTP isteği sonucunda başarılı olunmassa yüklenme durumunu bitir
    //! ve hata mesajı ile ilgili state i güncelle
    //! Ve uyarı ver.
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});
