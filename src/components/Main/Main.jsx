import SelectedPost from "../SelectedPost/SelectedPost";
import styles from "./Main.module.css";
function Main() {
  return (
    <main className={styles.main}>
      <SelectedPost />
    </main>
  );
}

export default Main;
