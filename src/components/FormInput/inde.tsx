import { Control, Controller } from "react-hook-form";
import React from "react";
import { StyledTextField } from "../../styles/Input";
import { InputType } from "zlib";
import { FieldError } from "react-hook-form/dist/types";

interface IObject {
  name: string;
  control: Control;
  type:
    | "number"
    | "search"
    | "button"
    | "time"
    | "image"
    | "text"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "month"
    | "password"
    | "radio"
    | "range";
  label: string;
  errorMenssage?: any;
}
export const FormInput = ({
  name,
  control,
  type,
  label,
  errorMenssage,
}: IObject) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <StyledTextField
          fullWidth
          onChange={onChange}
          value={value}
          type={type}
          label={label}
          error={errorMenssage}
          helperText={errorMenssage}
        />
      )}
    />
  );
};
