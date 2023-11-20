import { usePosts } from "../PostContext/PostContext";

function List() {
  const { posts, onSelectPost } = usePosts();
  return (
    <ul>
      {posts.map((post, i) => (
        <li onClick={() =>  onSelectPost(post) } key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} />
        </li>
      ))}
    </ul>
  );
}

export default List;
