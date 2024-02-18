/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import MenuItems from "./MenuItems";
import { flex, alignCenter, flexCenter } from "../../emotion/flex";
import styles from "./Menubar.module.css";
const Menubar = () => {
  const slideWidth = React.useRef<HTMLDivElement>(null);
  const slideHandler = () => {
    console.log(slideWidth.current?.clientWidth);
  };

  const menubarCover = css`
    width: 90%;
    margin: auto;
    height: 78px;
  `;
  const scroll = css`
    margin: 0 15px;
    overflow: hidden;
    position: relative;
    height: 100%;
  `;
  const filterButton = css`
    width: 82px;
    min-width: 82px;
    height: 48px;
    border: 1.5px solid var(--color-filterBorder);
    border-radius: 12px;
  `;

  const slideGradient = css`
    width: 28px;
    height: 28px;
    border: 1px solid var(--color-headerText-hover);
    border-radius: 50%;
    transform: rotate(180deg);
    cursor: pointer;
  `;
  return (
    <div css={[flex, alignCenter, menubarCover]}>
      <div css={[scroll, flexCenter]} ref={slideWidth}>
        <div className={styles.arrowButton} onClick={slideHandler}>
          <div css={[flexCenter, { height: "100%", backgroundColor: "white" }]}>
            <div css={[flexCenter, slideGradient]}>
              <img
                css={{ width: "7px", height: "12px" }}
                src={process.env.PUBLIC_URL + "/arrow_button.png"}
              />
            </div>
          </div>
        </div>
        <div>
          <MenuItems />
        </div>
        <div className={styles.arrowButton}>
          <div css={[flexCenter, { height: "100%", backgroundColor: "white" }]}>
            <div css={[flexCenter, slideGradient, { transform: "none" }]}>
              <img
                css={{ width: "7px", height: "12px" }}
                src={process.env.PUBLIC_URL + "/arrow_button.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <div css={[flexCenter, filterButton]}>
        <div css={[flexCenter, { marginRight: "10px" }]}>
          <img
            css={{ width: "16px", height: "16px" }}
            src={process.env.PUBLIC_URL + "/filterIcon.png"}
          />
        </div>
        <div>
          <span css={{ fontSize: "0.75rem", lineHeight: 2 }}>필터</span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
