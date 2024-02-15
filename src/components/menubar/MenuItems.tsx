import React from "react";
import { Link } from "react-router-dom";
import { arrayNames } from "./itemNames";
import styles from "./Menuitems.module.css";
const MenuItem = () => {
  return (
    <div className={styles.slideItems}>
      <ul>
        {arrayNames.map((name) => (
          <li key={name.image}>
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
