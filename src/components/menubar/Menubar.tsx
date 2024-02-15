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
      <div className={styles.filterButton}>
        <div className={styles.imageCover}>
          <img src={process.env.PUBLIC_URL + "/filterIcon.png"} />
        </div>
        <div>
          <span>필터</span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
