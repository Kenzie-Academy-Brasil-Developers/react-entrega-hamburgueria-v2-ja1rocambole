import { css } from "@emotion/react";
import styled from "styled-components";

interface IStyledInputSearche {
  fullWidth?: string;
}

export const StyledInputSearche = styled.div<IStyledInputSearche>`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;

  input {
    height: 60px;

    width: 100%;

    border: solid 2px var(--color-gray-20);
    border-radius: 8px;
    padding-left: 15px;
    padding-right: 50px;
  }
  input::placeholder {
    color: var(--color-gray-20);
  }
  input:focus {
    border: solid 2px var(--color-gray-100);
  }

  button {
    height: 40px;
    width: 50px;

    position: absolute;
    right: 5px;
  }
`;
