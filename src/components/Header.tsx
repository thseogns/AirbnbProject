import React from "react";
import type { RootState } from "../app/store";
import styles from "./Header.module.css";
import Navigation from "./headerNav/Navigation";
import Searchbar from "./searchbar/Searchbar";
import ButtonComponent from "./ButtonComponent";

import { useSelector, useDispatch } from "react-redux";
import { display } from "../features/display/display";
const Header = () => {
  const checkInDisplay = useSelector((state: RootState) => state.display.value);
  const dispatch = useDispatch();
  const lodgingToggleHandler = () => {
    dispatch(display(1));
  };
  const experienceToggleHandler = () => {
    dispatch(display(2));
  };
  console.log(checkInDisplay);
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
              <div className={styles.focus} onClick={lodgingToggleHandler}>
                <ButtonComponent>
                  <span
                    style={
                      checkInDisplay === 1
                        ? { color: "black", fontWeight: "bold" }
                        : {}
                    }
                  >
                    숙소
                  </span>
                </ButtonComponent>
              </div>
              <div className={styles.focus} onClick={experienceToggleHandler}>
                <ButtonComponent>
                  <span
                    style={
                      checkInDisplay === 2
                        ? { color: "black", fontWeight: "bold" }
                        : {}
                    }
                  >
                    체험
                  </span>
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
