import { usePosts } from "../PostContext/PostContext";
import styles from "./ButtonClearPosts.module.css";

function ButtonClearPosts() {
  // 3) Consuming Context Value
  const { onClearPosts } = usePosts();

  return <button className={styles.buttonClearPosts} onClick={onClearPosts}>Clear posts</button>;
}

export default ButtonClearPosts;
