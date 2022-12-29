import styled from "styled-components";

export const StyledLoginPage = styled.div`
  padding: 0.6rem;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 700px) {
    margin-top: 40px;

    flex-direction: row-reverse;
    gap: 62px;

    justify-content: center;
    align-items: flex-start;

    & > div:nth-child(1) {
      margin-top: 90px;
    }
  }
`;
