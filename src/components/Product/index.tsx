import React, { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledButton } from "../../styles/Button";
import { StyledText } from "../Text/style";
import { StyledTitle } from "../Title/style";
import { StyledProduct } from "./style";

interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export const Product = ({ id, img, name, category, price }: IProduct) => {
  const { currentSale, setCurrentSale } = useContext(CartContext);

  const addCurrentSale = () => {
    setCurrentSale([...currentSale, { id, img, name, category, price }]);
  };
  return (
    <>
      <StyledProduct>
        <div className="container-img">
          <img src={img} alt="" />
        </div>

        <div className="container-texts">
          <span className="display-none">teste</span>
          <StyledTitle tag="h3" color="var(--color-gray-100)" title="three">
            {name}
          </StyledTitle>

          <StyledText tag="p" Text="three" color="var(--color-gray-50)">
            {category}
          </StyledText>
          <StyledText tag="p" color="var(--color-primary)" Text="two">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledText>
          <StyledButton
            button="medium"
            buttonColor="green"
            onClick={addCurrentSale}
          >
            Adicionar
          </StyledButton>
        </div>
      </StyledProduct>
    </>
  );
};
