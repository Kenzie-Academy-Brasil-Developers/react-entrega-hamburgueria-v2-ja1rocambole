import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../providers/CartContext";
import { StyledDashboardPage } from "./style";

export const DashBoardPage = () => {
  const { userAuthorization, setUserAuthorization, globalLoading } =
    useContext(CartContext);

  if (globalLoading) {
    return null;
  }
  if (userAuthorization) {
    return (
      <StyledDashboardPage>
        <h1>dashboard</h1>
      </StyledDashboardPage>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
