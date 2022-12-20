import styled, { css } from "styled-components";
import { Title } from ".";

interface IStyledtitle {
  color?: string;
  title?: "one" | "two" | "three" | "four";
}

export const StyledTitle = styled(Title)<IStyledtitle>`
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  ${({ title }) => {
    switch (title) {
      case "one":
        return css`
          font-weight: 700;
          font-size: 1.625rem;
        `;
      case "two":
        return css`
          font-weight: 700;
          font-size: 1.375rem;
        `;
      case "three":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;
      case "four":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;
    }
  }}
`;
