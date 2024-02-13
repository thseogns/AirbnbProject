import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.regist}>
        <div>
          <a>
            <div>당신의 공간을 에이비엔비하세요</div>
          </a>
        </div>
        <div>
          <button>
            <div>이미지</div>
          </button>
        </div>
      </div>
      <div>로그인기능</div>
    </div>
  );
};

export default Navigation;
