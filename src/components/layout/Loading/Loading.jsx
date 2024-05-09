import { BiLoaderAlt } from "react-icons/bi";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BiLoaderAlt className={styles.loadingİcon} />
    </div>
  );
};

export default Loading;
