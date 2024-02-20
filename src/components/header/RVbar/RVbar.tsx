/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { grid } from "../../../emotion/grid";
import {
  flex,
  alignCenter,
  justifyCenter,
  flexColumn,
} from "../../../emotion/flex";

const RVbar = () => {
  const rvbarCover = css`
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 850px;
    height: 66px;
    margin: auto;
    border: 1px solid var(--color-userButton-hover);
    box-shadow: 0px 1px 3px 0px var(--color-userButton-hover);
    border-radius: 35px;
  `;
  const travelDestination = css`
    padding: 0 32px;
    border-right: 1px solid var(--color-userButton-hover);
    & input {
      border: none;
    }
    & input:focus {
      outline: none;
    }
  `;
  const topText = css`
    font-size: 0.75rem;
    font-weight: bold;
  `;
  const bottomText = css`
    font-size: 0.875rem;
    color: var(--color-headerText-hover);
  `;

  const checkInAndOut = css`
    grid-template-columns: 1fr 1fr;
    & > div {
      padding: 0 24px;
      border-right: 1px solid var(--color-userButton-hover);
    }
  `;

  const taveler = css`
    justify-content: space-between;
    padding-right: 11px;
  `;

  const guest = css`
    padding: 0 24px;
  `;

  const searchImage = css`
    background: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    width: 92px;
    height: 48px;
    border-radius: 25px;
    color: white;
  `;
  return (
    <div css={[rvbarCover, grid, alignCenter]}>
      <div css={travelDestination}>
        <div>
          <span css={topText}>여행지</span>
        </div>
        <div>
          <input placeholder="여행지 검색" />
        </div>
      </div>
      <div css={[grid, checkInAndOut]}>
        <div>
          <div>
            <span css={topText}>체크인</span>
          </div>
          <div>
            <span css={bottomText}>날짜 추가</span>
          </div>
        </div>
        <div>
          <div>
            <span css={topText}>체크아웃</span>
          </div>
          <div>
            <span css={bottomText}>날짜 추가</span>
          </div>
        </div>
      </div>
      <div css={[flex, taveler]}>
        <div css={[flex, flexColumn, justifyCenter, guest]}>
          <div>
            <span css={topText}>여행자</span>
          </div>
          <div>
            <span css={bottomText}>게스트 추가</span>
          </div>
        </div>
        <div css={[flex, alignCenter, justifyCenter, searchImage]}>
          <div css={{ width: "16px", height: "16px", marginRight: "10px" }}>
            <img
              css={{ width: "100%" }}
              src={process.env.PUBLIC_URL + "/search_icon.png "}
            />
          </div>
          <span>검색</span>
        </div>
      </div>
    </div>
  );
};

export default RVbar;
