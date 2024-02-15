import React from "react";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { arrayNames } from "./itemNames";
import styles from "./Menuitems.module.css";

import { useSelector, useDispatch } from "react-redux";
import { clickDisplay } from "../../features/display/display";
const MenuItem = () => {
  const clickstate = useSelector((state: RootState) => state.display.clickName);
  const dispatch = useDispatch();
  const clickEventHandler = (name: string) => {
    dispatch(clickDisplay(name));
  };
  console.log(clickstate);
  return (
    <div className={styles.slideItems}>
      <ul>
        {arrayNames.map((name) => (
          <li
            className={
              name.image === clickstate
                ? styles.clickSlideItem
                : styles.slideItem
            }
            key={name.image}
            onClick={() => clickEventHandler(name.image)}
          >
            <Link to={name.image}>
              <div className={styles.itemCover}>
                <img
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
