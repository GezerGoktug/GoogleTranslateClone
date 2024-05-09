import { createAsyncThunk } from "@reduxjs/toolkit";
import { options2 } from "../../constants/options";
import axios from "axios";


//! Thunk ile reduxta asenkron işlemleri kolayca yönetebiliriz
//! Normal redux ile api istekleri gibi asenkron işlemler yapılamaz
//! Ama thunk bunu yapılabilir kılmaktadır.

//! Aldığı ana dil ,hedef dil  ve çevrilecek olan yazı bilgileri ile
//! Sunucuya HTTP POST isteği atılır bu veriler il ve  
//! karşılığında API den hedef dile çevrilmiş yazıyı alırız
//! Bu fonksiyon bu  asenkron işlemleri yapar.
export const translateLanguage = createAsyncThunk(
  "translateLanguages",
  async ({ sourceLang, targetLang, text }) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", sourceLang);
    encodedParams.set("target_language", targetLang);
    encodedParams.set("text", text);
    const updatedOptions = { ...options2, data: encodedParams };

    const { data } = await axios.request(updatedOptions);
    return data.data.translatedText;
  }
);
