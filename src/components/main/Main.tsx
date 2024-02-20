/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { grid, gridColonm5 } from "../../emotion/grid";
const Main = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul css={[grid, gridColonm5, { width: "90%", margin: "auto" }]}>
      {number.map((index) => (
        <li key={index} css={{ listStyle: "none" }}>
          aa
        </li>
      ))}
    </ul>
  );
};

export default Main;
