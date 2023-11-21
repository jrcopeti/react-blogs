import FormAddPost from "../FormAddPost/FormAddPost";
import Posts from "../Posts/Posts";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <FormAddPost />
      <div className={styles.listDiv}>
        <Posts />
      </div>
    </aside>
  );
}

export default Sidebar;
