import styled from "@emotion/styled";
import { css } from "@emotion/react";
interface ButtonProps {
  checkInDisplay: boolean | undefined;
}
export const RVButton = styled.button<ButtonProps>`
  color: var(--color-headerText-hover);
  width: 64px;
  height: 44px;
  border: none;
  background-color: transparent;

  ${(props) =>
    props.checkInDisplay === true
      ? css`
          &:hover {
            background-color: transparent;
          }
        `
      : css`
          &:hover {
            border-radius: 50px;
            background-color: var(--color-button-hover);
            color: black;
          }
        `}
`;

export const UserButton = styled.button`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  width: 86px;
  height: 48px;
  background-color: transparent;
  border: 1px solid var(--color-userButton-hover);
  border-radius: 50px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 1px 3px 2px var(--color-userButton-hover);
  }
`;
export const StaticButton = styled.button`
  color: var(--color-headerText-hover);
  width: 64px;
  height: 44px;
  border: none;
  background-color: transparent;
  &:hover {
    border-radius: 50px;
    background-color: var(--color-button-hover);
    color: black;
  }
`;
