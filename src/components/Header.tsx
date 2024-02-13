import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Header/Navigation";

const Header = () => {
  return (
    <div className={styles.headerMargin}>
      <div className={styles.header}>
        <div className={styles.logoImage}>로고이미지</div>
        <div className={styles.checkIn}>
          <div>
            <button>
              <span>숙소</span>
            </button>
          </div>
          <div>
            <button>
              <span>체험</span>
            </button>
          </div>
          <div>
            <a href="#">온라인 체험</a>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
};

export default Header;
