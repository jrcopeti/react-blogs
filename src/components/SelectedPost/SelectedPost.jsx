import {usePosts} from "../PostContext/PostContext";
function SelectedPost() {
  const {selectedPost } = usePosts();
  if (!selectedPost) return null;

  return (
    <div>
      <h2>{selectedPost.title}</h2>
      <p>{selectedPost.body}</p>
      <img src={selectedPost.image} alt={selectedPost.title} />
    </div>
  );

}

export default SelectedPost;
