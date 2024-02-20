/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import MenuItems from "./MenuItems";
import { flex, alignCenter, flexCenter } from "../../../emotion/flex";
import styles from "./Menubar.module.css";
import FilterButton from "./FilterButton";
import ArrowButton from "./ArrowButton";
const Menubar = () => {
  const slideWidth = React.useRef<HTMLDivElement>(null);

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

  return (
    <div css={[flex, alignCenter, menubarCover]}>
      <div css={[scroll, flexCenter]} ref={slideWidth}>
        <ArrowButton direction={"next"} />
        <div>
          <MenuItems />
        </div>
        <ArrowButton direction={"prev"} />
      </div>
      <FilterButton />
    </div>
  );
};

export default Menubar;
