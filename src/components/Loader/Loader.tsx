import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Loading movies, please wait...</p>
      <div className={styles.spinner}></div>
    </div>
  );
}
