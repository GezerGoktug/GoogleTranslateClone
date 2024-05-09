import { useSelector } from "react-redux";
import TextArea from "../../UI/TextArea/TextArea";
import styles from "./languageInputs.module.css";

const LanguageInputs = ({ setSourceText, sourceText }) => {
  const {
    translatedText,
    error: translateError,
    isLoading: translateLoad,
  } = useSelector((state) => state.translateSlice);
  //! Çevrilcek olan yazıyı tutan state i güncelle
  const handleText = (e) => setSourceText(e.target.value);

  return (
    <div className={styles.languageTextInputs}>
      <TextArea
        value={sourceText}
        onChange={handleText}
        placeholder="Enter text"
      />
      <TextArea
        isLoading={translateLoad}
        value={translatedText}
        disabled={true}
        placeholder="Translation"
      />
    </div>
  );
};

export default LanguageInputs;
