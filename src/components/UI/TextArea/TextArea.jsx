import { BiLoaderAlt } from "react-icons/bi";
import styles from "./textarea.module.css";

const TextArea = ({ placeholder, disabled, onChange, value, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.translateLoading}>
          <BiLoaderAlt className={styles.translateLoadingİcon} />
        </div>
      )}
      <textarea
        className={styles.textArea}
        value={value}
        onChange={onChange}
        disabled={disabled || false}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
