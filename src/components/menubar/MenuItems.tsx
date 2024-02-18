/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { grid } from "../../emotion/grid";
import { flexColumn, flexCenter } from "../../emotion/flex";
import { arrayNames } from "./itemNames";

import styles from "./Menuitems.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clickDisplay } from "../../features/display/display";
const MenuItem = () => {
  const clickState = useSelector((state: RootState) => state.display.clickName);
  const dispatch = useDispatch();
  const clickEventHandler = (name: string) => {
    dispatch(clickDisplay(name));
  };
  const slideItems = css`
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    list-style: none;
    gap: 32px;
  `;

  return (
    <div>
      <ul css={[grid, slideItems]}>
        {arrayNames.map((name) => (
          <li
            css={
              name.image === clickState
                ? styles.clickSlideItem
                : styles.slideItem
            }
            key={name.image}
            onClick={() => clickEventHandler(name.image)}
          >
            <Link to={name.image}>
              <div css={[flexColumn, flexCenter]}>
                <img
                  css={{ width: "24px", height: "24px" }}
                  src={`${process.env.PUBLIC_URL}/houseIcon/${name.image}.jpg`}
                />
                <span className={styles.itemName}>{name.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
