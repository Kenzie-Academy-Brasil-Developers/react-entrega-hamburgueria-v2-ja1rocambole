import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButtonLink = styled(Link)`
  text-decoration: none;

  font-size: 1rem;
  font-weight: 600;
  color: var(--color-gray-50);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  background-color: var(--color-gray-0);
  padding: 2px 6px 2px 6px;
  border: 1px solid var(--color-gray-0);
  border-radius: 8px;

  &:hover {
    color: var(--color-gray-0);

    background-color: var(--color-gray-50);
    border: 1px solid var(--color-gray-50);
  }
`;
