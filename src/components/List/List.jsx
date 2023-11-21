import { usePosts } from "../PostContext/PostContext";
import styles from "./List.module.css";
function List() {
  const { posts, onSelectPost, onArchivePost } = usePosts();
  return (
    <>
      <ul className={styles.listDiv}>
        {posts.map((post) => (
          <li className={styles.item} key={post.id}>
            <h3 className={styles.title}>{post.title}</h3>
            {/* <p className={styles.text}>{post.body}</p> */}
            <img
              className={styles.image}
              src={post.image}
              alt={post.title}
              onClick={() => onSelectPost(post)}
            />
            <div className={styles.buttonDiv}>
            <button className={styles.show} onClick={() => onSelectPost(post)}>Show</button>
            <button onClick={() => onArchivePost(post)}>Archive</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
