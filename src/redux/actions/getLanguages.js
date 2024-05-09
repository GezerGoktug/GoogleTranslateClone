import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constants/options";
import axios from "axios";

//! Thunk ile reduxta asenkron işlemleri kolayca yönetebiliriz
//! Normal redux ile api istekleri gibi asenkron işlemler yapılamaz
//! Ama thunk bunu yapılabilir kılmaktadır.

//! Dil verilerini alan asenkron fonksiyon
export const getLanguages = createAsyncThunk("getLanguages", async () => {
  const { data } = await axios.request(options);
  return data.data.languages;
});
