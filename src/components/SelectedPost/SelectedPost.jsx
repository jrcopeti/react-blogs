import { usePosts } from "../PostContext/PostContext";
import styles from "./SelectedPost.module.css";
function SelectedPost() {
  const { selectedPost } = usePosts();
  if (!selectedPost) return null;

  return (

      <div className={styles.selectedPostDiv}>
        <div className={styles.selectedPostDivOverlay}>

        <h2 className={styles.title}>{selectedPost.title}</h2>
        <p className={styles.body}>{selectedPost.body}</p>
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
