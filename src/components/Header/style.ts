import styled from "styled-components";

export const StyledHeader = styled.div`
  background: var(--color-gray-0);

  & > div {
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;
    gap: 20px;
  }

  .input-searche-desk {
    display: none;
  }

  @media (min-width: 700px) {
    .searche-button {
      display: none;
    }

    .input-searche-desk {
      display: flex;
    }
  }
`;
