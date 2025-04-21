import React from "react";
import { CustomButtonContainer, IconContainer } from "./styles";

const CustomButton = ({ children, startIcon, onClick, ...rest }) => {
  return (
    <CustomButtonContainer {...rest} onClick={onClick}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
