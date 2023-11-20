import {usePosts} from "../PostContext/PostContext";
function SelectedPost() {
  const {selectedPost } = usePosts();
  if (!selectedPost) return null;

  return (
    <div>
      <h2>{selectedPost.title}</h2>
      <p>{selectedPost.body}</p>
    </div>
  );

}

export default SelectedPost;
