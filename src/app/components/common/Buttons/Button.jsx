import React from 'react';
import ButtonWrapper from './Button.styles';
import { ButtonTheme } from '../../../model/Themes';

const componentTheme = {
  [ButtonTheme.LIGHT]: {
    font: '#FFFFFF',
    border: 'none',
    background: 'linear-gradient(119.36deg, #FEBD81 0%, rgba(255, 255, 255, 0) 100%), #FF9091',
  },
  [ButtonTheme.DARK]: {
    font: '#FEBD81',
    border: '1px solid #FEBD81',
    background: '#FFFFFF',
  },
};

const Button = ({ theme, children, ...etc }) => (
  <ButtonWrapper theme={componentTheme[theme]} {...etc}>
    <ButtonWrapper.Title>{children}</ButtonWrapper.Title>
  </ButtonWrapper>
);

Button.defaultProps = {
  theme: ButtonTheme.LIGHT,
};

export default Button;
