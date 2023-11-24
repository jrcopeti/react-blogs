import { usePosts } from "../../hooks/usePosts";
import styles from "./SelectedPost.module.css";

function SelectedPost() {
  const { selectedPost } = usePosts();
  if (!selectedPost) return null;
  console.log(selectedPost);

  return (
    <div className={styles.selectedPostDiv}>
      <div className={styles.selectedPostDivTitleAndBody}>
        <h2 className={styles.title}>{selectedPost.title}</h2>
        <p className={styles.body}>{selectedPost.body}</p>
        <div className={styles.selectedPostDivAuthorDateSubject}>
          <p>{selectedPost.author}</p>
          <p>|</p>
          <p>{selectedPost.date}</p>
          <p>|</p>
          <p>{selectedPost.subject}</p>
        </div>
      </div>

      <img
        className={styles.image}
        src={selectedPost.image}
        alt={selectedPost.title}
      />
    </div>
  );
}

export default SelectedPost;
