import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.registCover}>
        <div className={styles.regist}>
          <div className={styles.boxMargin}>
            <a>
              <div>당신의 공간을 에이비엔비하세요</div>
            </a>
          </div>
          <div className={styles.boxMargin}>
            <button>
              <div>이미지</div>
            </button>
          </div>
        </div>
      </div>
      <div>로그인</div>
    </div>
  );
};

export default Navigation;
