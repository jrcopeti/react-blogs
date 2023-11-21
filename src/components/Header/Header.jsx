import styles from "./Header.module.css";

import SearchPosts from "../SearchPosts/SearchPosts";
import Results from "../Results/Results";
import ButtonClearPosts from "../ButtonClearPosts/ButtonClearPosts";

function Header() {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        The Hype Blog
      </h1>
      <div className={styles.searchDiv}>
        <Results />
        <SearchPosts />
      </div>
        <ButtonClearPosts />
    </header>
  );
}

export default Header;
