import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  padding: 0.6rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 10px;

  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    gap: 62px;

    justify-content: center;
    align-items: center;

    & > div:nth-child(1) {
      margin-top: -150px;

      display: flex;
    }
    & > div:nth-child(2) {
      gap: 0;
    }
  }
`;
