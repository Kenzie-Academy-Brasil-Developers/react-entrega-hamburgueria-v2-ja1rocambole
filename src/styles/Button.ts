import styled, { css } from "styled-components";

interface IStyledButton {
  button: "default" | "medium";
  buttonColor: "green" | "white";
}

export const StyledButton = styled.button<IStyledButton>`
  ${({ button }) => {
    switch (button) {
      case "default":
        return css`
          height: 60px;
        `;
      case "medium":
        return css`
          height: 40px;
        `;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 600;

  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "green":
        return css`
          color: var(--white-fixed);
          border: var(--color-primary);
          background-color: var(--color-primary);

          &:hover {
            background-color: var(--color-primary-50);
          }
        `;
      case "white":
        return css`
          color: var(--color-gray-50);
          border: var(--color-gray-20);
          background-color: var(--color-gray-20);

          &:hover {
            color: var(--color-gray-20);
            border: var(--color-gray-50);
            background-color: var(--color-gray-50);
          }
        `;
    }
  }};
`;
