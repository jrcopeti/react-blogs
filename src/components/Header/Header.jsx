import { usePosts } from "../PostContext/PostContext";

import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";

function Header() {
  // 3) Consuming Context Value
  const { onClearPosts } = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
