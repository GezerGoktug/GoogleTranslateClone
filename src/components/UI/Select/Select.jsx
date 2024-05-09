import Select from "react-select";
import styles from "./select.module.css";
const Selects = ({ placeholder, onChange, value, options }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.select}
      options={options}
    />
  );
};

export default Selects;
