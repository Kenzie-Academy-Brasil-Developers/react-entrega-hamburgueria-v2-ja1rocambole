import { TextField } from "@mui/material";
import React from "react";
import { StyledText } from "./components/Text/style";
import { Title } from "./components/Title";
import { StyledTitle } from "./components/Title/style";
import { StyledButton } from "./styles/Button";
import { InputSearche } from "./components/InputSearche";
import { StyledTextField } from "./styles/Input";

function App() {
  return (
    <div className="container">
      {/* <h1>first commit</h1>
      <h2>first commit dev</h2>
      <Title tag="h5">teste</Title>
      <StyledTitle tag="h2" color="red" title="one">
        teste estiloso
      </StyledTitle>
      <StyledText tag="span">span stiloso</StyledText>
      <StyledButton button="default" color="yellow" buttonColor="green">
        teste botão
      </StyledButton>
      <StyledButton button="medium" buttonColor="green">
        teste botão
      </StyledButton>

      <TextField
        variant="outlined"
        label="só tava testando"
        sx={{
          background: "var(--color-gray-0)",
        }}
      />
      <br />
      <p></p> */}
      {/* <StyledTextField
        variant="outlined"
        label="agora vai"
        sx={{
          background: "var(--color-gray-0)",
        }}
      /> */}

      <InputSearche />
    </div>
  );
}

export default App;
