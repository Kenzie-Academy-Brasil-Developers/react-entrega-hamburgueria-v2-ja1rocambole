import styled, { css } from "styled-components";
import { Text } from ".";

interface IStyledText {
  color?: string;
  Text?: "one" | "two" | "three";
}

export const StyledText = styled(Text)<IStyledText>`
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  ${({ Text }) => {
    switch (Text) {
      case "one":
        return css`
          font-weight: 400;
          font-size: 0.875rem;
        `;
      case "two":
        return css`
          font-weight: 600;
          font-size: 0.875rem;
        `;
      case "three":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;

      default:
        break;
    }
  }}
`;
