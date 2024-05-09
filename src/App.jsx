import Button from "./components/UI/Button/Button";
import "./styles/reset.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translateLanguage } from "./redux/actions/translateAction";
import { translateActions } from "./redux/slices/translateSlice";
import appStyles from "./styles/app.module.css";
import buttonStyles from "./components/UI/Button/button.module.css";
import Header from "./components/layout/Header/Header";
import LanguageInputs from "./components/layout/LanguageInputs/LanguageInputs";
import LanguageOptions from "./components/layout/LanguageOptions/LanguageOptions";
import Loading from "./components/layout/Loading/Loading";

function App() {
  const dispatch = useDispatch();
  //! Çevirceğimiz yazıyı bir state de tutuyoz
  const [sourceText, setSourceText] = useState("");
  //! ana dili tutacak state(default olarak türkçe ayarlı)
  const [sourceLanguage, setSourceLanguage] = useState({
    value: "tr",
    label: "Turkish",
  });
  //! hedef dili tutacak state(default olarak ingilizce ayarlı)
  const [targetLanguage, setTargetLanguage] = useState({
    value: "en",
    label: "English",
  });
  //! Dil seçenekleri gelirken yüklenme durumunu alıyoruz
  const { isLoading: languageLoad } = useSelector(
    (state) => state.languageSlice
  );
  //! Çevrilmiş veriyi alıyoruz.
  const { translatedText } = useSelector((state) => state.translateSlice);
  const { changeTranslateLanguage } = translateActions;

  //! ana dil state ini güncelliyoz.
  const selectSourceLanguage = (e) => setSourceLanguage(e);

  //! hedef dil state ini güncelliyoz.
  const selectTargetLanguage = (e) => setTargetLanguage(e);

  //! ana dil ile hedef dil seçeneklerini ve text leri  yer değiştirir
  const changeLanguage = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText);
    dispatch(changeTranslateLanguage({ text: sourceText }));
  };
  //! Çevir butonuna basıldığında ilgili asenkron thunk fonksiyonunu çalıştırır.
  const translate = () => {
    dispatch(
      translateLanguage({
        sourceLang: sourceLanguage.value,
        targetLang: targetLanguage.value,
        text: sourceText,
      })
    );
  };

  return (
    <div className={appStyles.wrapper}>
      {languageLoad && <Loading />}

      <div className={appStyles.container}>
        <Header />
        <LanguageOptions
          changeLanguage={changeLanguage}
          targetLanguage={targetLanguage}
          sourceLanguage={sourceLanguage}
          selectTargetLanguage={selectTargetLanguage}
          selectSourceLanguage={selectSourceLanguage}
        />
        <LanguageInputs setSourceText={setSourceText} sourceText={sourceText} />
        <Button onClick={translate} className={buttonStyles.translateButton}>
          Translate
        </Button>
      </div>
    </div>
  );
}

export default App;


