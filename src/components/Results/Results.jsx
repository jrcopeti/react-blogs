import { usePosts } from "../PostContext/PostContext";
import styles from "./Results.module.css";
function Results() {
  const { posts } = usePosts();
  return (
    <p className={styles.results}>
      {posts.length} post(s) found
    </p>
  );
}

export default Results;
