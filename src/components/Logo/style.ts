import styled, { css } from "styled-components";
import { Logo } from ".";

interface StyledLogo {
  Size?: "one" | "two";
}

export const StyledLogo = styled(Logo)<StyledLogo>`
  ${({ Size }) => {
    switch (Size) {
      case "one":
        return css`
          color: var(--color-gray-100);
          font-weight: 700;
          font-size: 40px;

          span {
            color: var(--color-secondary);
            font-weight: 700;
            font-size: 32px;
          }
        `;
      case "two":
        return css`
          color: var(--color-gray-100);
          font-weight: 700;
          font-size: 26px;

          span {
            color: var(--color-secondary);
            font-weight: 700;
            font-size: 18px;
          }
        `;

      default:
        break;
    }
  }}
`;
