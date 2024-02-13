import React from "react";
import styles from "./Navigation.module.css";
import ButtonComponent from "../ButtonComponent";
const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <div className={styles.regist}>
          <div className={styles.boxMargin}>
            <a href="#">
              <div>당신의 공간을 에이비엔비하세요</div>
            </a>
          </div>
          <div className={`${styles.boxMargin} ${styles.languege}`}>
            <ButtonComponent>
              <div className={styles.imageCover}>
                <img src={process.env.PUBLIC_URL + "/languege.svg "} />
              </div>
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div className={styles.userButton}>
        <div className={styles.bugerImage}>
          <ButtonComponent>
            <div>
              <img src={process.env.PUBLIC_URL + "/buger_button.png "} />
            </div>
          </ButtonComponent>
        </div>
        <div className={styles.userImage}>
          <ButtonComponent>
            <div>
              <img src={process.env.PUBLIC_URL + "/user_icon.png "} />
            </div>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
