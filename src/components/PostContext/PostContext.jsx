import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const NUM_POSTS = 10;
const NUM_POSTS_ARCHIVE = 10;


function createDate() {
const date = faker.date.recent();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return date.toLocaleDateString('en-US', options);
}

function createRandomPost() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000);
  const randomImage = `https://source.unsplash.com/random/800x600?sig=${timestamp}-${randomNum}`;



  return {
    id: `${timestamp}-${randomNum}`,
    title: faker.hacker.phrase(),
    body: faker.lorem.paragraph(),
    author: faker.person.fullName(),
    date: createDate(),
    subject: faker.hacker.noun(),
    image: randomImage,
  };
}

// title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
// 1. Create a context
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: NUM_POSTS }, () => createRandomPost())
  );

  const [archivedPosts, setArchivedPosts] = useState(() =>
  Array.from({ length: NUM_POSTS_ARCHIVE }, () => createRandomPost())
);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedPost, setSelectedPost] = useState(posts[0]);

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
    setPosts((posts) => [...posts, post]);
    setArchivedPosts((archivedPosts) => archivedPosts.filter((p) => p.id !== post.id));

  }

  function handleArchivePosts(post) {
    setPosts((posts) => posts.filter((p) => p.id !== post.id));
    setArchivedPosts((archivedPosts) => [...archivedPosts, post]);
  }
  function handleClearPosts() {
    setPosts([]);
    setSelectedPost(null)
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
        archivedPosts,
        onArchivePost: handleArchivePosts,
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
