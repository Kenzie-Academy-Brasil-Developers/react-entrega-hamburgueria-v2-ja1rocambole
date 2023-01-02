import styled from "styled-components";

export const StyledModalCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(51, 51, 51, 0.5);
  position: fixed;
  z-index: 9;

  padding: 20px;
  height: 100vh;
  width: 100vw;
  & > div {
    z-index: 99;

    min-height: 158px;
    max-height: 400px;
    width: 500px;
    min-width: 280px;

    background: var(--color-gray-0);
    border-radius: 5px 5px 5px 5px;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 54px;

    padding: 13px 22px;
    border-radius: 5px 5px 0px 0px;
    background: var(--color-primary);
  }
  .modal-title > button {
    border: none;
    background: none;

    font-size: 28px;
    font-family: "Nunito", sans-serif;
    color: rgba(255, 255, 255, 0.5);
  }
  .modal-title > button:hover {
    color: var(--white-fixed);
  }

  .modal-content {
    padding: 20px;
  }

  .modal-content > .cart-empty {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  ul {
    height: 100px;

    display: flex;
    flex-direction: column;
    gap: 18px;

    overflow-y: auto;
  }

  li {
    /* min-height: 80px;
    width: 100%; */
  }

  hr {
    border: none;
    border-radius: 2px;
    margin: 18px 0 18px 0;

    height: 2px;
    background: var(--color-gray-20);
  }

  .modal-content > div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
  }
  .modal-content > button {
    width: 100%;
  }
`;
