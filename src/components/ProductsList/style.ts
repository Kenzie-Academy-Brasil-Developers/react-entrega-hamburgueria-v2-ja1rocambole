import styled from "styled-components";

export const StyledProductsList = styled.ul`
  margin-top: 32px;
  margin-bottom: 80px;
  padding-top: 5px;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 1200px) {
    overflow-x: hidden;
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    overflow-x: hidden;
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;
