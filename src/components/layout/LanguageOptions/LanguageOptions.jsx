import { FaExchangeAlt } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Selects from "../../UI/Select/Select";
import { useEffect, useMemo } from "react";
import { getLanguages } from "../../../redux/actions/getLanguages";
import { useDispatch, useSelector } from "react-redux";
import styles from "./languageOptions.module.css";

const LanguageOptions = (props) => {
  const {
    changeLanguage,
    sourceLanguage,
    targetLanguage,
    selectTargetLanguage,
    selectSourceLanguage,
  } = props;
  const dispatch = useDispatch();
  const { languages, error: languageError } = useSelector(
    (state) => state.languageSlice
  );

  //! Sayfa ilk açıldığında dil verilerini al.
  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  //! Dil verileri uygun formata getir ve sakla.
  const memoizedData = useMemo(() => {
    const languageOptions = languages.map((language) => {
      return { value: language.code, label: language.name };
    });
    return languageOptions;
  }, [languages]);
  return (
    <div className={styles.languageOptions}>
      <Selects
        options={memoizedData}
        value={sourceLanguage}
        onChange={selectSourceLanguage}
        placeholder="Default Language"
      />
      <Button onClick={changeLanguage}>
        <FaExchangeAlt />
        <span>Change</span>
      </Button>
      <Selects
        options={memoizedData}
        value={targetLanguage}
        onChange={selectTargetLanguage}
        placeholder="Target Language"
      />
    </div>
  );
};

export default LanguageOptions;
