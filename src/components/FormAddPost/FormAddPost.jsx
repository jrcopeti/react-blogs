import { useState } from "react";
import { usePosts } from "../PostContext/PostContext";

const timestamp = new Date().getTime();
const randomNum = Math.floor(Math.random() * 1000);
const randomImage = `https://source.unsplash.com/random/800x600?sig=${timestamp}-${randomNum}`;
const id = `${timestamp}-${randomNum}`;


function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { onAddPost } = usePosts();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ id, title, body, image: randomImage });
    setTitle("");
    setBody("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
