import React from "react";
import { StyledText } from "../Text/style";
import { StyledBoxMenssage } from "./style";

import shoppingBag from "../../assets/shopping-bag (1).svg";
import wallBalls from "../../assets/Group 135.svg";

export const BoxMenssage = () => {
  return (
    <StyledBoxMenssage>
      <div>
        <img src={shoppingBag} alt="" />
      </div>
      <div>
        <StyledText tag="p" Text="one" color="var(--color-gray-50)">
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <StyledText tag="span" Text="two" color="var(--color-gray-100)">
            melhores{" "}
          </StyledText>
          ingredientes.
        </StyledText>
      </div>

      <div>
        <img src={wallBalls} alt="" />
      </div>
    </StyledBoxMenssage>
  );
};
