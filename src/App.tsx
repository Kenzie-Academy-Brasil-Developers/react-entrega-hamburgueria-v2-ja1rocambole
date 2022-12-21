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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa,
        repudiandae fugit nobis temporibus architecto quas aperiam maxime
        molestiae, corrupti iure laudantium eaque? Veniam, officiis et!
        Consequatur magni corrupti distinctio.
      </p>

      <InputSearche />
    </div>
  );
}

export default App;
