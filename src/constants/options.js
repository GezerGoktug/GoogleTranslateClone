//! Çevirme işlemi için HTTP isteği config ayarları 

export const options2 = {
  method: "POST",
  url: "https://text-translator2.p.rapidapi.com/translate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_API_KEY,
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};


//! Dil seçenekleri verilerini almak için HTTP isteği config ayarları
export const options = {
  method: "GET",
  url: "https://text-translator2.p.rapidapi.com/getLanguages",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_API_KEY,
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};
