import React from "react";
import MenuItems from "./MenuItems";
import styles from "./Menubar.module.css";
const Menubar = () => {
  return (
    <div className={styles.menubarCover}>
      <div className={styles.scroll}>
        <div>
          <MenuItems />
        </div>
      </div>
      <div className={styles.filterButton}>왼</div>
    </div>
  );
};

export default Menubar;
