import React from "react";
import { StyledText } from "./components/Text/style";
import { Title } from "./components/Title";
import { StyledTitle } from "./components/Title/style";

function App() {
  return (
    <div>
      <h1>first commit</h1>
      <h2>first commit dev</h2>
      <Title tag="h5">teste</Title>
      <StyledTitle tag="h2" color="red" title="one">
        teste estiloso
      </StyledTitle>
      <StyledText tag="span">span stiloso</StyledText>
    </div>
  );
}

export default App;
