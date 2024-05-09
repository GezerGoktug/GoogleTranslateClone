import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/img/logo.png" alt="google-translate-logo" />
      <h1>Google Translate Clone</h1>
    </div>
  );
};

export default Header;
