import React, { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { ButtonImage } from "../ButtonImage";
import { StyledTitle } from "../Title/style";
import { StyledModalCartProduct } from "./style";

export interface ICartProduct {
  id: number;
  img: string;
  name: string;
}

export const ModalCartProduct = ({ id, img, name }: ICartProduct) => {
  const { currentSale, setCurrentSale } = useContext(CartContext);

  const removeCurrentSale = () => {
    const newCurrentSale = currentSale.filter((product) => product.id !== id);

    setCurrentSale(newCurrentSale);
  };

  return (
    <StyledModalCartProduct>
      <img src={img} alt="" className="cart-image" />
      <div>
        <StyledTitle tag="h4" title="three" color="var(--color-gray-100)">
          {name}
        </StyledTitle>
      </div>

      <ButtonImage imageButton="trash" onClick={() => removeCurrentSale()} />
    </StyledModalCartProduct>
  );
};
