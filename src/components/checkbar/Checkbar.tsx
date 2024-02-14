import React from "react";
import styles from "./Checkbar.module.css";
const Checkbar = () => {
  return (
    <div className={styles.checkbarCover}>
      <div className={styles.travelDestination}>
        <div>
          <span className={styles.fontSize}>여행지</span>
        </div>
        <div>
          <input className={styles.fontSizeSub} placeholder="여행지 검색" />
        </div>
      </div>
      <div className={styles.checkInAndOut}>
        <div>
          <div>
            <span className={styles.fontSize}>체크인</span>
          </div>
          <div>
            <span className={styles.fontSizeSub}>날짜 추가</span>
          </div>
        </div>
        <div>
          <div>
            <span className={styles.fontSize}>체크아웃</span>
          </div>
          <div>
            <span className={styles.fontSizeSub}>날짜 추가</span>
          </div>
        </div>
      </div>
      <div className={styles.traveler}>
        <div className={styles.guest}>
          <div>
            <span className={styles.fontSize}>여행자</span>
          </div>
          <div>
            <span className={styles.fontSizeSub}>게스트 추가</span>
          </div>
        </div>
        <div className={styles.searchImage}>
          <div>
            <img src={process.env.PUBLIC_URL + "/search_icon.png "} />
          </div>
          <span>검색</span>
        </div>
      </div>
    </div>
  );
};

export default Checkbar;
