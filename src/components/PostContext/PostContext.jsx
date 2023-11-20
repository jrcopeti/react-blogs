import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";



function createRandomPost() {
  const timestamp = new Date().getTime();
  console.log(timestamp)
  const randomNum = Math.floor(Math.random() * 1000);
  console.log(randomNum)

  const randomImage = `https://source.unsplash.com/random/800x600?sig=${randomNum}`;
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
    image: randomImage,
  };
}




// 1. Create a context
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 3 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedPost, setSelectedPost] = useState(null);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  function handleSelectPost(post) {
    setSelectedPost(post);
  }

  return (
    // 2. wrap the components that need access to the context in a Provider and pass the value

    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        selectedPost,
        onSelectPost: handleSelectPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
export { PostProvider, usePosts };
