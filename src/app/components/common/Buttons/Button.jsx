import React from 'react';
import ButtonWrapper from './Button.styles';

const Button = ({ title, type, onClick }) => {
  const theme = {
    light: {
      font: '#4CAF50',
      border: '#4CAF50',
      background: '#FFFFFF',
    },
    dark: {
      font: '#FFFFFF',
      border: '#4CAF50',
      background: '#4CAF50',
    },
  };

  return (
    <ButtonWrapper onClick={onClick} theme={theme[type]}>
      <ButtonWrapper.Title>{title}</ButtonWrapper.Title>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  title: '',
  type: 'light',
  onClick: () => {},
};

export default Button;
