import styled from "styled-components";

export const StyledBoxMenssage = styled.div`
  width: 377px;
  height: 95px;

  background: var(--white-fixed);
  border: 1px solid var(--color-gray-20);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: grid;
  gap: 45px 15px;
  grid-template-columns: 60px auto; /* justify-content: space-between; */

  padding: 15px;

  div:nth-child(1) {
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
  }
  div:nth-child(2) {
    line-height: 22px;

    border-radius: 5px;
  }
  div:nth-child(3) {
    /* bolinhas que somem lembrar de mostrar na tela desk */
    display: none;
  }

  @media (min-width: 700px) {
    div:nth-child(3) {
      /* bolinhas que somem lembrar de mostrar na tela desk */
      display: block;
    }
  }
`;
