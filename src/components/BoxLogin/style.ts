import styled from "styled-components";

export const StyledBoxLogin = styled.div`
  height: fit-content;
  width: 377px;
  max-width: 500px;

  padding: 20px 15px;
  background: var(--white-fixed);
  border: 2px solid var(--color-gray-0);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  form > div {
    margin-top: 25px;
  }

  form > button {
    margin-top: 20px;
    width: 100%;
  }

  & > p {
    width: 250px;
    align-self: center;
    text-align: center;
  }
`;
