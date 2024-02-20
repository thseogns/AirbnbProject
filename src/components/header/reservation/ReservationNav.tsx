/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import type { RootState } from "../../../app/store";
import RVbar from "../RVbar/RVbar";

import { flexCenter } from "../../../emotion/flex";
import { RVButton } from "../../../emotion/components/Button";

import { useSelector, useDispatch } from "react-redux";
import { display } from "../../../features/display/display";
const ReservationNav = () => {
  const checkInDisplay = useSelector((state: RootState) => state.display.value);
  const dispatch = useDispatch();
  const lodgingToggleHandler = () => {
    dispatch(display(1));
  };
  const experienceToggleHandler = () => {
    dispatch(display(2));
  };

  //css
  const position = css`
    flex: 0 1 auto;
  `;
  const checkInCover = css`
    position: absolute;
    width: 100%;
    margin: auto;
    left: 0;
    padding: 0 24px;
    flex: 0 1 140px;
  `;
  const checkInBox = css`
    width: 100%;
    height: 80px;
  `;
  const focus = css`
    border: none;
    display: flex;
    align-self: center; //검토
  `;
  const onlineExperience = css`
    color: var(--color-headerText-hover);
    display: block;
    text-align: center;
    line-height: 2.9;
    width: 115px;
    height: 44px;
    &:hover {
      border-radius: 50px;
      background-color: var(--color-button-hover);
      color: black;
    }
  `;
  //css

  return (
    <div css={position}>
      <div css={checkInCover}>
        <div css={[flexCenter, checkInBox]}>
          <div css={focus} onClick={lodgingToggleHandler}>
            <RVButton checkInDisplay={checkInDisplay === 1 ? true : false}>
              <span
                css={
                  checkInDisplay === 1
                    ? {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }
                    : { fontSize: "1rem" }
                }
              >
                숙소
              </span>
            </RVButton>
          </div>
          <div css={focus} onClick={experienceToggleHandler}>
            <RVButton checkInDisplay={checkInDisplay === 2 ? true : false}>
              <span
                css={
                  checkInDisplay === 2
                    ? { color: "black", fontWeight: "bold", fontSize: "1rem" }
                    : { fontSize: "1rem" }
                }
              >
                체험
              </span>
            </RVButton>
          </div>
          <div css={focus}>
            <a href="#" css={onlineExperience}>
              <span css={{ fontSize: "1rem" }}>온라인 체험</span>
            </a>
          </div>
        </div>
        <RVbar />
      </div>
    </div>
  );
};

export default ReservationNav;
