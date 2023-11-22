import { useState } from "react";
import { usePosts } from "../PostContext/PostContext";
import { faker } from "@faker-js/faker";
import styles from "./FormAddPost.module.css";

const timestamp = new Date().getTime();
const randomNum = Math.floor(Math.random() * 1000);
const randomImage = `https://source.unsplash.com/random/800x600?sig=${timestamp}-${randomNum}`;
const id = `${timestamp}-${randomNum}`;

function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const { onAddPost } = usePosts();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title || !author) return;
    onAddPost({
      id,
      title,
      body,
      author,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      subject: faker.hacker.noun(),
      image: randomImage,
    });
    setTitle("");
    setBody("");
    setAuthor("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title..."
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body..."
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Post author..."
      />

      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
