import React from "react";
import styles from "./ButtonComponent.module.css";
const ButtonComponent = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.buttonStyle}>{children}</button>;
};

export default ButtonComponent;
