import FormAddPost from "../FormAddPost/FormAddPost";
import Posts from "../Posts/Posts";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={styles.formDiv}>
        <FormAddPost />
      </div>
      <aside className={styles.sidebar}>
        <div className={styles.listDiv}>
          <Posts />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
