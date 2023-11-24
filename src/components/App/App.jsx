import { PostProvider} from "../../contexts/PostContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Archive from "../Archive/Archive";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <section className={styles.appSection}>
          <Main />
          <Sidebar />
        </section>
        <Archive />
        <Footer />
      </PostProvider>
    </>
  );
}

export default App;
