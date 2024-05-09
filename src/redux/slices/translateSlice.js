import { createSlice } from "@reduxjs/toolkit";
import { translateLanguage } from "../actions/translateAction";
const initialState = {
  isLoading: false,
  error: false,
  translatedText: "",
};
export const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    //! Ana dil yazısı ile hedef dil yazısını yer değiştirir.
    changeTranslateLanguage(state, action) {
      state.translatedText = action.payload.text;
    },
  },
  extraReducers: (builder) => {
    //! HTTP isteği başarı ile sonuçlanırsa gelen hedef dile çevrilmiş veri
    //! ile state i güncelle ve yüklenme durumunu bitir
    builder.addCase(translateLanguage.fulfilled, (state, action) => {
      state.translatedText = action.payload;
      state.isLoading = false;
    });
    //! HTTP isteği atıldıktan sonra istek sonuçlanana kadar yüklenme durumunu sürdür.
    builder.addCase(translateLanguage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    //! HTTP isteği sonucunda başarılı olunmassa yüklenme durumunu bitir
    //! ve hata mesajı ile ilgili state i güncelle
    //! Ve uyarı ver.
    builder.addCase(translateLanguage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      alert("Something went wrong please try again");
    });
  },
});
export const translateActions = translateSlice.actions;
