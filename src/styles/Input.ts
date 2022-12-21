import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)({
  borderRadius: "8px",

  "& label.Mui-focused": {
    color: "var(--color-gray-100)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--color-gray-0)",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-gray-0)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});
