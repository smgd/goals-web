import React, { useState } from 'react';
import ButtonWrapper from "./Button.styles";

const Button = ({ title, style, onClick }) => {

  const theme = {
    light: {
      font: "#4CAF50",
      border: "#4CAF50",
      background: "#FFFFFF",
    },
    dark: {
      font: "#FFFFFF",
      border: "#4CAF50",
      background: "#4CAF50",
    },
  };

  return (
    <ButtonWrapper onClick={onClick} theme={theme[style]}>
      <ButtonWrapper.Title>{title}</ButtonWrapper.Title>
    </ButtonWrapper>
  )
};

Button.defaultProps = {
  title: '',
  style: 'light',
  onClick: () => {},
};

export default Button;