/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { flexCenter } from "../../../emotion/flex";
const ArrowButton = ({ direction }: { direction: string }) => {
  const slideHandler = () => {};

  const Button = css`
    width: 28px;
    height: 28px;
    border: 1px solid var(--color-headerText-hover);
    border-radius: 50%;
    cursor: pointer;
  `;
  const prevButton = css`
    transform: rotate(180deg);
  `;

  const prevArrowPosition = css`
    left: 0;
  `;
  const nextArrowPosition = css`
    right: 0;
    top: 0;
    flex-direction: row-reverse;
  `;
  const arrowButton = css`
    display: flex;
    z-index: 2;
    position: absolute;
    width: 68px;
    height: 78px;
  `;
  const gradient = css`
    display: block;
    z-index: -1;
    width: 40px;
    height: 100%;
    pointer-events: none;
    background: rgb(255, 255, 255);
  `;
  const prevGradient = css`
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `;
  const nextGradient = css`
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  `;
  return (
    <>
      <div
        css={
          direction === "prev"
            ? [arrowButton, prevArrowPosition]
            : [arrowButton, nextArrowPosition]
        }
        onClick={slideHandler}
      >
        <div css={[flexCenter, { height: "100%", backgroundColor: "white" }]}>
          <div
            css={
              direction === "prev"
                ? [flexCenter, Button, prevButton]
                : [flexCenter, Button]
            }
          >
            <img
              css={{ width: "7px", height: "12px" }}
              src={process.env.PUBLIC_URL + "/arrow_button.png"}
            />
          </div>
        </div>
        <div
          css={
            direction === "prev"
              ? [gradient, prevGradient]
              : [gradient, nextGradient]
          }
        />
      </div>
    </>
  );
};

export default ArrowButton;
