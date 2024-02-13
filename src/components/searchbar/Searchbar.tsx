import React from "react";
import styles from "./Searchbar.module.css";
const Searchbar = () => {
  return (
    <div className={styles.searchbarCover}>
      <div>여행지</div>
      <div className={styles.checkInAndOut}>
        <div>체크인</div>
        <div>체크아웃</div>
      </div>
      <div>여행자</div>
    </div>
  );
};

export default Searchbar;
