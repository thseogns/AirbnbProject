import React from "react";
import styles from "./Header.module.css";
import Navigation from "./headerNav/Navigation";
import Searchbar from "./searchbar/Searchbar";
import ButtonComponent from "./ButtonComponent";

const Header = () => {
  return (
    <div className={styles.headerMargin}>
      <div className={styles.header}>
        <div className={styles.logoImage}>
          <a>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="로고" />
          </a>
        </div>
        <div className={styles.position}>
          <div className={styles.checkInCover}>
            <div className={styles.checkIn}>
              <div className={styles.lodging}>
                <ButtonComponent>
                  <span>숙소</span>
                </ButtonComponent>
              </div>
              <div className={styles.focus}>
                <ButtonComponent>
                  <span>체험</span>
                </ButtonComponent>
              </div>
              <div className={styles.focus}>
                <a href="#">
                  <span>온라인 체험</span>
                </a>
              </div>
            </div>
            <Searchbar />
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
};

export default Header;
