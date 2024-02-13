import React from "react";
import styles from "./Searchbar.module.css";
const Searchbar = () => {
  return (
    <div className={styles.searchbarCover}>
      <div className={styles.travelDestination}>여행지</div>
      <div className={styles.checkInAndOut}>
        <div>체크인</div>
        <div>체크아웃</div>
      </div>
      <div className={styles.traveler}>
        <div className={styles.guest}>여행자</div>
        <div>이미지</div>
      </div>
    </div>
  );
};

export default Searchbar;
