/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexCenter } from "../../../emotion/flex";
const FilterButton = () => {
  const filterButton = css`
    width: 82px;
    min-width: 82px;
    height: 48px;
    border: 1.5px solid var(--color-filterBorder);
    border-radius: 12px;
  `;
  return (
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
  );
};

export default FilterButton;
