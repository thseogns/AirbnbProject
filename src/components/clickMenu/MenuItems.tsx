import React from "react";
import { Link } from "react-router-dom";
import { arrayNames } from "./itemNames";
import styles from "./Menuitems.module.css";
const MenuItem = () => {
  return (
    <div className={styles.slideItems}>
      <ul>
        {arrayNames.map((name) => (
          <li>
            <Link to={name.image} key={name.image}>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/houseIcon/${name.image}.jpg`}
                />
              </div>
              <div>
                <span>{name.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
