import { usePosts } from "../PostContext/PostContext";
import styles from "./Results.module.css";
function Results() {
  const { posts } = usePosts();
  return (
    <p className={styles.results}>
      <span>🔎 </span>
      {posts.length} hype posts found
    </p>
  );
}

export default Results;
