/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import UserNavigation from "./headerNav/UserNavigation";
import ReservationNav from "./reservation/ReservationNav";

const Header = () => {
  const headerAlign = css`
    margin: auto;
    position: sticky;
    height: 168px;
    border-bottom: 1px solid var(--color-filterBorder);
  `;
  const haeder = css`
    width: 90%;
    height: 80px;
    margin: auto;
    display: flex;
  `;
  const logoImage = css`
    margin: auto;
    margin-left: 0;
    display: flex;
    flex: 1 0 140px;
  `;
  return (
    <div css={headerAlign}>
      <div css={haeder}>
        <div css={logoImage}>
          <a>
            <img
              css={{ width: "118px", height: "64px" }}
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="로고"
            />
          </a>
        </div>
        <ReservationNav />
        <UserNavigation />
      </div>
    </div>
  );
};

export default Header;
