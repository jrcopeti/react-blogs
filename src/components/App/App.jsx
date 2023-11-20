import { useEffect, useState } from "react";
import { PostProvider } from "../PostContext/PostContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Archive from "../Archive/Archive";
import Footer from "../Footer/Footer";
import SelectedPost from "../SelectedPost/SelectedPost";

function App() {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <PostProvider>
        <Header />
        <Main />
        <SelectedPost />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
