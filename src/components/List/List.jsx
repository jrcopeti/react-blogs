import { usePosts } from "../PostContext/PostContext";

function List() {
  const { posts, onSelectPost, onArchivePost } = usePosts();
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <img
              className="list-image"
              src={post.image}
              alt={post.title}
              onClick={() => onSelectPost(post)}
            />
            <button onClick={() => onArchivePost(post)}>Archive</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
