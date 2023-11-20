import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";
import { useContext } from "react";
import { PostContext } from "../App/App";

function Header() {
  // 3) Consuming Context Value
  const {onClearPosts} = useContext(PostContext)
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results/>
        <SearchPosts

        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
