import React from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
