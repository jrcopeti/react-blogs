import { usePosts } from "../PostContext/PostContext";
import styles from "./SearchPosts.module.css";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <input className={styles.searchInput}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
