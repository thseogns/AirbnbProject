import React from "react";
import MenuItems from "./MenuItems";
import styles from "./Menubar.module.css";
const Menubar = () => {
  const slideWidth = React.useRef<HTMLDivElement>(null);
  const slideHandler = () => {
    console.log(slideWidth.current?.clientWidth);
  };
  return (
    <div className={styles.menubarCover}>
      <div className={styles.scroll} ref={slideWidth}>
        <div className={styles.arrowButton} onClick={slideHandler}>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL + "/arrow_button.png"} />
            </div>
          </div>
        </div>
        <div>
          <MenuItems />
        </div>
        <div className={styles.arrowButton}>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL + "/arrow_button.png"} />
            </div>
          </div>
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
