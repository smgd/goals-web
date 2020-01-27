import React from 'react';
import ButtonWrapper from './Button.styles';

const Button = ({ title, type, onClick }) => {
  const theme = {
    light: {
      font: '#FFFFFF',
      border: 'none',
      background: 'linear-gradient(119.36deg, #FEBD81 0%, rgba(255, 255, 255, 0) 100%), #FF9091',
    },
    dark: {
      font: '#FEBD81',
      border: '1px solid #FEBD81',
      background: '#FFFFFF',
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
