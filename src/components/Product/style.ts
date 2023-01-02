import styled from "styled-components";

export const StyledProduct = styled.li`
  height: 346px;
  max-width: 300px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  white-space: normal;

  border: 2px solid var(--color-gray-20);
  border-radius: 5px;

  &:hover {
    border: 2px solid var(--color-primary-50);
  }

  .container-img {
    height: 158px;
    width: 100%;
    background-color: var(--color-gray-0);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-img > img {
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .container-texts {
    padding: 26px 21px 23px 21px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;
