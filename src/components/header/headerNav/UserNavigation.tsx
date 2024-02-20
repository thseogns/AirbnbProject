/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styles from "./UserNavigation.module.css";
import { flexCenter } from "../../../emotion/flex";
import { StaticButton, UserButton } from "../../../emotion/components/Button";
const Navigation = () => {
  const UserNavbar = css`
    z-index: 2;
    display: flex;
    margin: auto;
    margin-right: 0;
  `;
  const navOptions = css`
    display: flex;
    margin-right: 5px;
  `;
  const regist = css`
    font-weight: bold;
    font-size: 14px;
    padding: 0 12px;
    &:hover {
      border-radius: 50px;
      background-color: var(--color-button-hover);
    }
  `;
  const languege = css`
    width: 46px;
    height: 48px;
    & button {
      width: 46px;
      height: 42px;
      border: none;
      background-color: transparent;
    }
  `;
  const imageCover = css`
    width: 100%;
    height: 100%;
  `;

  const imageAlign = css`
    margin-left: 13px;
    display: flex;
    align-items: center;
  `;
  return (
    <div css={UserNavbar}>
      <div>
        <div css={navOptions}>
          <div css={[regist, flexCenter]}>
            <a href="#">
              <div>당신의 공간을 에이비엔비하세요</div>
            </a>
          </div>
          <div css={[languege, regist, flexCenter]}>
            <StaticButton>
              <div css={[imageCover, flexCenter]}>
                <img
                  css={{ width: "16px" }}
                  src={process.env.PUBLIC_URL + "/languege.svg "}
                />
              </div>
            </StaticButton>
          </div>
        </div>
      </div>

      <UserButton>
        <div css={[flexCenter, { height: "100%" }]}>
          <div>
            <img
              css={[imageAlign, { width: "16px", height: "16px" }]}
              src={process.env.PUBLIC_URL + "/buger_Button.png "}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              css={[imageAlign, { width: "32px", height: "32px" }]}
              src={process.env.PUBLIC_URL + "/user_icon.png "}
            />
          </div>
        </div>
      </UserButton>
    </div>
  );
};

export default Navigation;
