import React from "react";

import { StyledButtonImage } from "./style";

import searche from "../../assets/searche.svg";
import cart from "../../assets/cart.svg";
import logOut from "../../assets/logOut.svg";
import trash from "../../assets/trash.svg";

interface IImageButton {
  imageButton: "searche" | "cart" | "logOut" | "trash";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

export const ButtonImage = ({
  imageButton,
  onClick,
  className,
}: IImageButton) => {
  return (
    <StyledButtonImage className={className} onClick={onClick}>
      {imageButton === "searche" && (
        <img src={searche} alt="" className="searche" />
      )}
      {imageButton === "cart" && <img src={cart} alt="" className="cart" />}
      {imageButton === "logOut" && (
        <img src={logOut} alt="" className="logOut" />
      )}
      {imageButton === "trash" && <img src={trash} alt="" className="trash" />}
    </StyledButtonImage>
  );
};
