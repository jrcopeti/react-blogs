import { useState } from "react";

import { usePosts } from "../PostContext/PostContext";

import styles from "./Archive.module.css";

function Archive() {
  const { onAddPost, archivedPosts } = usePosts();

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside className={styles.archive}>
      <h2>Post archive</h2>
      <button
        onClick={() => setShowArchive((s) => !s)}
        className={showArchive ? styles.hideButton : styles.showButton}
      >
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {archivedPosts.map((post) => (
            <li key={archivedPosts.id}>
              <p>{post.title}</p>
              <img
                className={styles.image}
                src={post.image}
                alt={post.title}
                onClick={() => onAddPost(post)}
              />
              <button
                className={styles.addButton}
                onClick={() => onAddPost(post)}
              >
                Add as new post
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Archive;
